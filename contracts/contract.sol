pragma solidity ^0.8.23;




contract DePreMa {

    /// @notice The minimum amount of tokens that can be wagered
  uint256 private constant MIN_WAGER = 0.00001 ether;
  /// @notice The maximum amount of tokens that can be wagered
  uint256 private constant MAX_WAGER = 0.01 ether;
  /// @notice The delay after a wager starts before it can be resolved
  uint256 private constant Wagerager_RESOLVE_DELAY = 2 hours;

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




    //TODO: Interface wager: wagerID? API?
     struct Wager {
    //uint256 sportId; // The ID of the sport
    //uint256 externalId; // The ID of the wager on the external sports API
    uint256 timestamp; // The timestamp of the wager start time
    uint256 firstWagerAmount; // The total amount of tokens wagered on the home team
    uint256 secondWagerAmount; // The total amount of tokens wagered on the away team
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
    Event1, // first Event happened
    Event2 // the second event happend
  }

    //EVENTS
    event Registered(uint256 indexed wagerId);
    event WagerResolved(uint256 indexed wagerId, Result result);
    event Predicted(address indexed user, uint256 indexed wagerId, Result result, uint256 amount);
    event Claimed(address indexed user, uint256 indexed wagerId, uint256 amount);


    //Actions

    function predict(uint256 wagerID, Result result) public payable {
    Wager memory wager = wagers[wagerID];
    uint256 wagerAmount = msg.value;

    // Check if the prediction is valid
    if (wager.externalId == 0) revert wagerNotRegistered();
    if (wager.resolved) revert wagerIsResolved();
    if (wager.timestamp < block.timestamp) revert wagerAlreadyStarted();
    if (wagerAmount < MIN_WAGER) revert InsufficientValue();
    if (wagerAmount > MAX_WAGER) revert ValueTooHigh();

    // Update the wager pool amounts
    if (result == Result.Home) wagers[wagerId].homeWagerAmount += wagerAmount;
    else if (result == Result.Away) wagers[wagerId].awayWagerAmount += wagerAmount;
    else revert InvalidResult();

    // Add the prediction to the user's list of predictions
    predictions[msg.sender][wagerId].push(Prediction(wagerId, result, wagerAmount, false));
    emit Predicted(msg.sender, wagerId, result, wagerAmount);
  }

  /// @notice Register a wager and predict the result in one transaction
  /// @param sportId The ID of the sport
  /// @param externalId The ID of the wager on the external sports API
  /// @param timestamp The timestamp of the wager start time
  /// @param result The predicted result
  function registerAndPredict(uint256 sportId, uint256 externalId, uint256 timestamp, Result result) external payable {
    uint256 wagerId = _registerwager(sportId, externalId, timestamp);
    predict(wagerId, result);
  }