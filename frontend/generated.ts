export const predictionABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracleAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'InsufficientValue',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidResult',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NothingToClaim',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
      {
        internalType: 'enum Test.Result',
        name: 'result',
        type: 'uint8',
      },
    ],
    name: 'predict',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ResolveAlreadyRequested',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
      {
        internalType: 'enum Test.Result',
        name: 'result',
        type: 'uint8',
      },
    ],
    name: 'resolveWager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracleAddress',
        type: 'address',
      },
    ],
    name: 'setOracleAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TimestampInPast',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ValueTooHigh',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WagerAlreadyRegistered',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WagerAlreadyStarted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WagerIsResolved',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WagerNotReadyToResolve',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WagerNotRegistered',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WagerNotResolved',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Claimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum Test.Result',
        name: 'result',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Predicted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
    ],
    name: 'WagerRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum Test.Result',
        name: 'result',
        type: 'uint8',
      },
    ],
    name: 'WagerResolved',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'wagerAmount',
        type: 'uint256',
      },
      {
        internalType: 'enum Test.Result',
        name: 'result',
        type: 'uint8',
      },
    ],
    name: 'calculateWinnings',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getActivePredictions',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'wagerId',
            type: 'uint256',
          },
          {
            internalType: 'enum Test.Result',
            name: 'result',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'claimed',
            type: 'bool',
          },
        ],
        internalType: 'struct Test.Prediction[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getActiveWagers',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'wagerID',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'event1WagerAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'event2WagerAmount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'resolved',
            type: 'bool',
          },
          {
            internalType: 'enum Test.Result',
            name: 'result',
            type: 'uint8',
          },
        ],
        internalType: 'struct Test.Wager[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getPastPredictions',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'wagerId',
            type: 'uint256',
          },
          {
            internalType: 'enum Test.Result',
            name: 'result',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'claimed',
            type: 'bool',
          },
        ],
        internalType: 'struct Test.Prediction[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
    ],
    name: 'getWager',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'wagerID',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'event1WagerAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'event2WagerAmount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'resolved',
            type: 'bool',
          },
          {
            internalType: 'enum Test.Result',
            name: 'result',
            type: 'uint8',
          },
        ],
        internalType: 'struct Test.Wager',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getWagerId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'predictionIdx',
        type: 'uint32',
      },
    ],
    name: 'isPredictionCorrect',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'wagerId',
        type: 'uint256',
      },
    ],
    name: 'readyToResolve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
