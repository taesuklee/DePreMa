// Import Chainlink contracts
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract YourContract is ChainlinkClient {
    // Chainlink oracle address and jobId
    address private oracle = 0x83e08eeD7Fb03B178A48738e4442D7f1640F6Bb8;
    bytes32 private jobId = "your_job_id";

    // Variable to store the Bitcoin price
    uint256 public bitcoinPrice;

    // Chainlink callback function
    function fulfill(bytes32 _requestId, uint256 _price) public recordChainlinkFulfillment(_requestId) {
        bitcoinPrice = _price;
    }

    // Function to request Bitcoin price
    function requestBitcoinPrice() public {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        sendChainlinkRequestTo(oracle, req, ORACLE_PAYMENT); // ORACLE_PAYMENT is the LINK amount you pay to the oracle
    }
}
