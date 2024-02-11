// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract PlaceholderOracle {
    event Request(bytes32 indexed requestId, string url);
    event Fulfill(bytes32 indexed requestId, bytes32 data);

    function request(string memory url) external returns (bytes32 requestId) {
        requestId = keccak256(abi.encodePacked(url));
        emit Request(requestId, url);
    }

    function fulfill(bytes32 requestId, bytes32 data) external {
        emit Fulfill(requestId, data);
    }
}
