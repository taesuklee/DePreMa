pragma solidity ^0.8.7;

import {ResultsConsumer} from "./ResultsConsumer.sol";

// Configuration parameters for initializing the contract
struct Config {
    address oracle; // The address of the Chainlink Function oracle
    uint64 subscriptionId; // The ID of the Chainlink Functions subscription
    uint64 destinationChainSelector; // The chain selector for the winnings transfer destination chain
    uint32 gasLimit; // The gas limit for the Chainlink Functions request callback
    bytes secrets; // The secrets for the Chainlink Functions request
    string source; // The source code for the Chainlink Functions request
}

contract Test {
    /// @notice The minimum amount of tokens that can be wagered
    uint256 private constant MIN_WAGER = 0.00001 ether;
    /// @notice The maximum amount of tokens that can be wagered
    uint256 private constant MAX_WAGER = 0.01 ether;
    /// @notice The delay after a wager starts before it can be resolved
    uint256 private constant Wager_RESOLVE_DELAY = 2 hours;

    /// @notice Mapping of wager IDs to wager data
    mapping(uint256 => Wager) private wagers;
    /// @notice Mapping of user addresses to wager IDs to predictions
    mapping(address => mapping(uint256 => Prediction[])) private predictions;

    /// @notice Mapping of wager IDs to Chainlink Functions request IDs
    mapping(uint256 => bytes32) private pendingRequests;

    /// @notice List of wager IDs that have not been resolved
    uint256[] private activeWagers;
    /// @notice List of wager IDs that have been resolved
    uint256[] private resolvedWagers;

    /// @notice Owner of the Contract
    address private owner;

    /// @notice Owner of the Oracle
    address private oracle;

    uint private currentWagerID;

    //TODO: Interface wager: wagerID? API?
    struct Wager {
        uint256 wagerID; // The ID of the wager
        uint256 timestamp; // The timestamp of the wager start time
        uint256 event1WagerAmount; // The total amount of tokens wagered on event 1
        uint256 event2WagerAmount; // The total amount of tokens wagered on event 2
        bool resolved; // Whether or not the wager has finished and the result has been set
        Result result; // The result of the wager
    }

    //TODO: Interface Prediction: Do we need a wager ID ina prediction market?
    struct Prediction {
        uint256 wagerId; // The ID of the wager
        Result result; // The predicted result
        uint256 amount; // The amount of tokens wagered
        bool claimed; // Whether or not the winnings have been claimed
    }

    //TODO: interface Result
    enum Result {
        None, // Not yet resolved
        Event1, // the first event happened
        Event2 // the second event happend
    }

    //EVENTS
    event WagerRegistered(uint256 indexed wagerId);
    event WagerResolved(uint256 indexed wagerId, Result result);
    event Predicted(
        address indexed user,
        uint256 indexed wagerId,
        Result result,
        uint256 amount
    );
    event Claimed(
        address indexed user,
        uint256 indexed wagerId,
        uint256 amount
    );

    // ERRORS

    error WagerAlreadyRegistered();
    error TimestampInPast();
    error WagerNotRegistered();
    error WagerIsResolved();
    error WagerAlreadyStarted();
    error InsufficientValue();
    error ValueTooHigh();
    error InvalidResult();
    error WagerNotResolved();
    error WagerNotReadyToResolve();
    error ResolveAlreadyRequested();
    error NothingToClaim();

    constructor(address oracleAddress) {
        owner = msg.sender;
        oracle = oracleAddress;
    }

    //Actions

    function predict(uint256 wagerId, Result result) public payable {
        //Check if wager exists
        if (wagerId > currentWagerID) revert WagerNotRegistered();
        Wager memory wager = wagers[wagerId];
        uint256 wagerAmount = msg.value;

        // Check if the prediction is valid
        if (wager.resolved) revert WagerIsResolved();
        if (wager.timestamp < block.timestamp) revert WagerAlreadyStarted();
        // if (wagerAmount < MIN_WAGER) revert InsufficientValue();
        //if (wagerAmount > MAX_WAGER) revert ValueTooHigh();

        // Update the wager pool amounts
        if (result == Result.Event1)
            wagers[wagerId].event1WagerAmount += wagerAmount;
        else if (result == Result.Event2)
            wagers[wagerId].event2WagerAmount += wagerAmount;
        else revert InvalidResult();

        // Add the prediction to the user's list of predictions
        predictions[msg.sender][wagerId].push(
            Prediction(wagerId, result, wagerAmount, false)
        );
        emit Predicted(msg.sender, wagerId, result, wagerAmount);
    }

    /// @notice Register a wager and predict the result in one transaction

    /// @param timestamp The timestamp of the wager start time
    function register(uint256 timestamp) public onlyOracle {
        _registerWager(timestamp);
    }

    /// @notice Claim winnings for a game
    /// @param wagerId The ID of the game
    /// @dev Works for multiple predictions per user
    function claim(uint256 wagerId) external {
        Wager memory wager = wagers[wagerId];
        address user = msg.sender;

        if (!wager.resolved) revert WagerNotResolved();

        // Calculate the total winnings and mark the predictions as claimed
        uint256 totalWinnings = 0;
        Prediction[] memory userPredictions = predictions[user][wagerId];
        for (uint256 i = 0; i < userPredictions.length; i++) {
            Prediction memory prediction = userPredictions[i];
            // Skip if the prediction has already been claimed
            if (prediction.claimed) continue;
            if (wager.result == Result.None) {
                // For a draw, the user gets their tokens back
                totalWinnings += prediction.amount;
            } else if (prediction.result == wager.result) {
                // Calculate the winnings for correct predictions
                uint256 winnings = calculateWinnings(
                    wagerId,
                    prediction.amount,
                    prediction.result
                );
                totalWinnings += winnings;
            }
            predictions[user][wagerId][i].claimed = true;
        }

        if (totalWinnings == 0) revert NothingToClaim();

        // Transfer the winnings to the user on the same chain
        payable(user).transfer(totalWinnings);

        emit Claimed(user, wagerId, totalWinnings);
    }

    /// @notice Register a game in the contract
    /// @param timestamp The timestamp of the game start time
    /// @return wagerId The ID of the game used in the contract
    function _registerWager(
        uint256 timestamp
    ) internal returns (uint256 wagerId) {
        currentWagerID++;

        // Check if the game can be registered
        if (timestamp < block.timestamp) revert TimestampInPast();

        // Store the game data
        wagers[currentWagerID] = Wager(
            currentWagerID,
            timestamp,
            0,
            0,
            false,
            Result.None
        );
        // Add the game to the active games list
        activeWagers.push(wagerId);

        emit WagerRegistered(wagerId);
    }

    /// @notice Resolve a game with a final result
    /// @param wagerId The ID of the game
    /// @param result The result of the game
    /// @dev Removes the game from the active games list
    function resolveWager(uint256 wagerId, Result result) public onlyOracle {
        // Store the game result and mark the game as finished
        wagers[wagerId].result = result;
        wagers[wagerId].resolved = true;

        // Add the game to the finished games list
        resolvedWagers.push(wagerId);
        _removeFromActiveWagers(wagerId);

        emit WagerResolved(wagerId, result);
    }

    /// @notice Remove a game from the active games list
    /// @param wagerId The ID of the game
    function _removeFromActiveWagers(uint256 wagerId) internal {
        uint256 index;
        for (uint256 i = 0; i < activeWagers.length; i++) {
            if (activeWagers[i] == wagerId) {
                index = i;
                break;
            }
        }
        for (uint256 i = index; i < activeWagers.length - 1; i++) {
            activeWagers[i] = activeWagers[i + 1];
        }
        activeWagers.pop();
    }

    // GETTERS

    // @notice Get the ID of a game used in the contract
    // @param wagerId The ID of the sport
    // @param externalId The ID of the game on the external sports API
    // @return wagerId The ID of the game used in the contract
    // @dev The game ID is a unique number combining of the sport ID and the external ID
    function getWagerId() public view returns (uint256) {
        return currentWagerID;
    }

    /// @notice Get the data of a game
    /// @param wagerId The ID of the game
    function getWager(uint256 wagerId) external view returns (Wager memory) {
        return wagers[wagerId];
    }

    /// @notice Get the data of all active games
    /// @return activeGamesArray An array of all active games data
    function getActiveWagers() public view returns (Wager[] memory) {
        Wager[] memory activeWagersArray = new Wager[](activeWagers.length);
        for (uint256 i = 0; i < activeWagers.length; i++) {
            activeWagersArray[i] = wagers[activeWagers[i]];
        }
        return activeWagersArray;
    }

    /// @notice Get the data of all user predictions for active games
    /// @param user The address of the user
    /// @return userPredictions An array of all user predictions for active games
    function getActivePredictions(
        address user
    ) external view returns (Prediction[] memory) {
        uint256 totalPredictions = 0;
        for (uint256 i = 0; i < activeWagers.length; i++) {
            totalPredictions += predictions[user][activeWagers[i]].length;
        }
        uint256 index = 0;
        Prediction[] memory userPredictions = new Prediction[](
            totalPredictions
        );
        for (uint256 i = 0; i < activeWagers.length; i++) {
            Prediction[] memory wagerPredictions = predictions[user][
                activeWagers[i]
            ];
            for (uint256 j = 0; j < wagerPredictions.length; j++) {
                userPredictions[index] = wagerPredictions[j];
                index++;
            }
        }
        return userPredictions;
    }

    /// @notice Get the data of all user predictions for resolved games
    /// @param user The address of the user
    /// @return userPredictions An array of all user predictions for resolved games
    function getPastPredictions(
        address user
    ) external view returns (Prediction[] memory) {
        uint256 totalPredictions = 0;
        for (uint256 i = 0; i < resolvedWagers.length; i++) {
            totalPredictions += predictions[user][resolvedWagers[i]].length;
        }
        uint256 index = 0;
        Prediction[] memory userPredictions = new Prediction[](
            totalPredictions
        );
        for (uint256 i = 0; i < resolvedWagers.length; i++) {
            Prediction[] memory wagerPredictions = predictions[user][
                resolvedWagers[i]
            ];
            for (uint256 j = 0; j < wagerPredictions.length; j++) {
                userPredictions[index] = wagerPredictions[j];
                index++;
            }
        }
        return userPredictions;
    }

    /// @notice Check if a user predicted a game correctly
    /// @param user The address of the user
    /// @param wagerId The ID of the game
    /// @param predictionIdx The index of the prediction
    /// @return correct Whether or not the prediction was correct
    /// @dev The prediction must be for a resolved game
    function isPredictionCorrect(
        address user,
        uint256 wagerId,
        uint32 predictionIdx
    ) external view returns (bool) {
        Wager memory wager = wagers[wagerId];
        if (!wager.resolved) return false;
        Prediction memory prediction = predictions[user][wagerId][
            predictionIdx
        ];
        return prediction.result == wager.result;
    }

    /// @notice Calculate the projected winnings for a prediction at the current time
    /// @param wagerId The ID of the game
    /// @param wagerAmount The amount of tokens wagered
    /// @param result The predicted result
    /// @return winnings The projected winnings
    /// @dev The game must be registered
    function calculateWinnings(
        uint256 wagerId,
        uint256 wagerAmount,
        Result result
    ) public view returns (uint256) {
        Wager memory wager = wagers[wagerId];
        // Calculate the total amount of tokens wagered on the game
        uint256 totalWagerAmount = wager.event1WagerAmount +
            wager.event2WagerAmount;
        // Calculate the winnings based on the result and the total amount of tokens wagered
        uint256 winnings = (wagerAmount * totalWagerAmount) /
            (
                result == Result.Event1
                    ? wager.event1WagerAmount
                    : wager.event2WagerAmount
            );
        return winnings;
    }

    /// @notice Check if a game is ready to be resolved
    /// @param wagerId The ID of the game
    /// @return ready Whether or not the game is ready to be resolved
    /// @dev The game must be registered and not resolved
    /// @dev Used by Chainlink Automation to determine if a game result should be requested
    function readyToResolve(uint256 wagerId) public view returns (bool) {
        return
            wagers[wagerId].timestamp + Wager_RESOLVE_DELAY < block.timestamp;
    }

    //MODIFIER
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyOracle() {
        require(msg.sender == oracle, "Not the oracle");
        _;
    }

    //SETTERS
    function setOracleAddress(address oracleAddress) public onlyOwner {
        oracle = oracleAddress;
    }
}
