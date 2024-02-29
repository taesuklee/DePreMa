// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {ResultsConsumer} from "./ResultsConsumer.sol";

contract PredictionGame is ResultsConsumer, ConfirmedOwner {
    /// @notice The minimum amount of tokens that can be wagered
    uint256 private constant MIN_WAGER = 0.00001 ether;
    /// @notice The maximum amount of tokens that can be wagered
    uint256 private constant MAX_WAGER = 0.01 ether;
    /// @notice The delay after a game starts before it can be resolved
    uint256 private constant GAME_RESOLVE_DELAY = 2 hours;

    /// @notice The owner of the contract
    address private contractOwner;

    /// @notice Mapping of game IDs to game data
    mapping(uint256 => Game) private games;

    /// @notice Mapping of user addresses to game IDs to predictions
    mapping(address => mapping(uint256 => Prediction[])) private predictions;

    /// @notice Mapping of game IDs to Chainlink Functions request IDs
    mapping(uint256 => bytes32) private pendingRequests;

    /// @notice List of game IDs that have not been resolved
    uint256[] private activeGames;
    /// @notice List of game IDs that have been resolved
    uint256[] private resolvedGames;

    // STRUCTS
    struct Config {
        address oracle; // The address of the Chainlink Function oracle
        // address ccipRouter; // The address of the Chainlink CCIP router
        // address link; // The address of the LINK token
        // address weth9Token; // The address of the WETH9 token
        // address exchangeToken; // The address of the exchange token used to transfer native tokens
        // address uniswapV3Router; // The address of the Uniswap V3 router
        uint64 subscriptionId; // The ID of the Chainlink Functions subscription
        // uint64 destinationChainSelector; // The chain selector for the winnings transfer destination chain
        uint32 gasLimit; // The gas limit for the Chainlink Functions request callback
        // bytes secrets; // The secrets for the Chainlink Functions request
        string source; // The source code for the Chainlink Functions request
    }

    struct Game {
        uint256 categoryId; // The ID of the category
        uint256 externalId; // The ID of the game on the external API
        uint256 timestamp; // The timestamp of the game start time
        uint256 homeWagerAmount; // The total amount of tokens wagered on the home team
        uint256 awayWagerAmount; // The total amount of tokens wagered on the away team
        bool resolved; // Whether or not the game has finished and the result has been set
        Result result; // The result of the game
    }

    struct Prediction {
        uint256 gameId; // The ID of the game
        Result result; // The predicted result
        uint256 amount; // The amount of tokens wagered
        bool claimed; // Whether or not the winnings have been claimed
    }

    enum Result {
        None, // The game has not been resolved or the result is a draw
        Home, // The home team won
        Away // The away team won
    }

    // EVENTS

    event GameRegistered(uint256 indexed gameId);
    event GameResolved(uint256 indexed gameId, Result result);
    event Predicted(
        address indexed user,
        uint256 indexed gameId,
        Result result,
        uint256 amount
    );
    event Claimed(address indexed user, uint256 indexed gameId, uint256 amount);

    // ERRORS

    error GameAlreadyRegistered();
    error TimestampInPast();
    error GameNotRegistered();
    error GameIsResolved();
    error GameAlreadyStarted();
    error InsufficientValue();
    error ValueTooHigh();
    error InvalidResult();
    error GameNotResolved();
    error GameNotReadyToResolve();
    error ResolveAlreadyRequested();
    error NothingToClaim();

    constructor(
        Config memory config
    )
        ResultsConsumer(
            config.oracle,
            config.subscriptionId,
            config.source,
            // config.secrets,
            config.gasLimit
        )
        ConfirmedOwner(msg.sender)
    {
        contractOwner = msg.sender;
    }

    // ACTIONS

    function getGameId(
        uint256 categoryId,
        uint256 externalId
    ) public pure returns (uint256) {
        return (categoryId << 128) | externalId;
    }

    /// @notice
    function createGame(
        uint256 categoryId,
        uint256 externalId
    ) public onlyOwner returns (Game memory) {
        uint256 gameId = getGameId(categoryId, externalId);

        if (games[gameId].externalId != 0) revert GameAlreadyRegistered();

        Game memory game = Game(
            categoryId,
            externalId,
            block.timestamp,
            0,
            0,
            false,
            Result.None
        );

        games[gameId] = game;

        return game;
    }

    // INTERNAL
    function _processResult(
        uint256 sportId,
        uint256 externalId,
        bytes memory response
    ) internal virtual override {}

    // GETTERS
    function getNumber(uint256 num) public pure returns (uint256) {
        return (num + 1);
    }

    function getOwner() public view returns (address) {
        return contractOwner;
    }

    // function sendRequest(
    //     string memory source,
    //     string[] memory args,
    //     uint64 subscriptionId,
    //     uint32 gasLimit,
    //     bytes32 donID
    // ) external onlyOwner returns (bytes32 requestId) {
    //     FunctionsRequest.Request memory req;
    //     req.initializeRequestForInlineJavaScript(source);

    //     if (args.length > 0) req.setArgs(args);

    //     s_lastRequestId = _sendRequest(
    //         req.encodeCBOR(),
    //         subscriptionId,
    //         gasLimit,
    //         donID
    //     );

    //     return s_lastRequestId;
    // }
}
