export const predictionABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'num',
        type: 'uint256',
      },
    ],
    name: 'store',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'retrieve',
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
]

// export const predictionABI = [
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'oracle',
//         type: 'address',
//       },
//       {
//         internalType: 'uint32',
//         name: 'gasLimit',
//         type: 'uint32',
//       },
//     ],
//     stateMutability: 'nonpayable',
//     type: 'constructor',
//   },
//   {
//     inputs: [],
//     name: 'InsufficientValue',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'InvalidResult',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NoInlineSecrets',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'NothingToClaim',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'RequestIsAlreadyPending',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'RequestIsNotPending',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'ResolveAlreadyRequested',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'SenderIsNotRegistry',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'TimestampInPast',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'ValueTooHigh',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'WagerAlreadyRegistered',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'WagerAlreadyStarted',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'WagerIsResolved',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'WagerNotReadyToResolve',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'WagerNotRegistered',
//     type: 'error',
//   },
//   {
//     inputs: [],
//     name: 'WagerNotResolved',
//     type: 'error',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'user',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'amount',
//         type: 'uint256',
//       },
//     ],
//     name: 'Claimed',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [],
//     name: 'NoPendingRequest',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'user',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'enum DePreMa.Result',
//         name: 'result',
//         type: 'uint8',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'amount',
//         type: 'uint256',
//       },
//     ],
//     name: 'Predicted',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: 'bytes',
//         name: 'response',
//         type: 'bytes',
//       },
//     ],
//     name: 'RequestFailed',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'bytes32',
//         name: 'id',
//         type: 'bytes32',
//       },
//     ],
//     name: 'RequestFulfilled',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'bytes32',
//         name: 'id',
//         type: 'bytes32',
//       },
//     ],
//     name: 'RequestSent',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'sportId',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'externalId',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'bytes32',
//         name: 'requestId',
//         type: 'bytes32',
//       },
//     ],
//     name: 'RequestedResult',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: 'bytes32',
//         name: 'requestId',
//         type: 'bytes32',
//       },
//       {
//         indexed: false,
//         internalType: 'bytes',
//         name: 'response',
//         type: 'bytes',
//       },
//     ],
//     name: 'ResultReceived',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//     ],
//     name: 'WagerRegistered',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'enum DePreMa.Result',
//         name: 'result',
//         type: 'uint8',
//       },
//     ],
//     name: 'WagerResolved',
//     type: 'event',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'wagerAmount',
//         type: 'uint256',
//       },
//       {
//         internalType: 'enum DePreMa.Result',
//         name: 'result',
//         type: 'uint8',
//       },
//     ],
//     name: 'calculateWinnings',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'bool',
//         name: 'transfer',
//         type: 'bool',
//       },
//     ],
//     name: 'claim',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         components: [
//           {
//             internalType: 'enum Functions.Location',
//             name: 'codeLocation',
//             type: 'uint8',
//           },
//           {
//             internalType: 'enum Functions.Location',
//             name: 'secretsLocation',
//             type: 'uint8',
//           },
//           {
//             internalType: 'enum Functions.CodeLanguage',
//             name: 'language',
//             type: 'uint8',
//           },
//           {
//             internalType: 'string',
//             name: 'source',
//             type: 'string',
//           },
//           {
//             internalType: 'bytes',
//             name: 'secrets',
//             type: 'bytes',
//           },
//           {
//             internalType: 'string[]',
//             name: 'args',
//             type: 'string[]',
//           },
//         ],
//         internalType: 'struct Functions.Request',
//         name: 'req',
//         type: 'tuple',
//       },
//       {
//         internalType: 'uint64',
//         name: 'subscriptionId',
//         type: 'uint64',
//       },
//       {
//         internalType: 'uint32',
//         name: 'gasLimit',
//         type: 'uint32',
//       },
//       {
//         internalType: 'uint256',
//         name: 'gasPrice',
//         type: 'uint256',
//       },
//     ],
//     name: 'estimateCost',
//     outputs: [
//       {
//         internalType: 'uint96',
//         name: '',
//         type: 'uint96',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'user',
//         type: 'address',
//       },
//     ],
//     name: 'getActivePredictions',
//     outputs: [
//       {
//         components: [
//           {
//             internalType: 'uint256',
//             name: 'wagerId',
//             type: 'uint256',
//           },
//           {
//             internalType: 'enum DePreMa.Result',
//             name: 'result',
//             type: 'uint8',
//           },
//           {
//             internalType: 'uint256',
//             name: 'amount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'bool',
//             name: 'claimed',
//             type: 'bool',
//           },
//         ],
//         internalType: 'struct DePreMa.Prediction[]',
//         name: '',
//         type: 'tuple[]',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'getActiveWagers',
//     outputs: [
//       {
//         components: [
//           {
//             internalType: 'uint256',
//             name: 'activityId',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'externalId',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'timestamp',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'event1WagerAmount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'event2WagerAmount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'bool',
//             name: 'resolved',
//             type: 'bool',
//           },
//           {
//             internalType: 'enum DePreMa.Result',
//             name: 'result',
//             type: 'uint8',
//           },
//         ],
//         internalType: 'struct DePreMa.Wager[]',
//         name: '',
//         type: 'tuple[]',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'getDONPublicKey',
//     outputs: [
//       {
//         internalType: 'bytes',
//         name: '',
//         type: 'bytes',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'user',
//         type: 'address',
//       },
//     ],
//     name: 'getPastPredictions',
//     outputs: [
//       {
//         components: [
//           {
//             internalType: 'uint256',
//             name: 'wagerId',
//             type: 'uint256',
//           },
//           {
//             internalType: 'enum DePreMa.Result',
//             name: 'result',
//             type: 'uint8',
//           },
//           {
//             internalType: 'uint256',
//             name: 'amount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'bool',
//             name: 'claimed',
//             type: 'bool',
//           },
//         ],
//         internalType: 'struct DePreMa.Prediction[]',
//         name: '',
//         type: 'tuple[]',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//     ],
//     name: 'getWager',
//     outputs: [
//       {
//         components: [
//           {
//             internalType: 'uint256',
//             name: 'activityId',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'externalId',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'timestamp',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'event1WagerAmount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'uint256',
//             name: 'event2WagerAmount',
//             type: 'uint256',
//           },
//           {
//             internalType: 'bool',
//             name: 'resolved',
//             type: 'bool',
//           },
//           {
//             internalType: 'enum DePreMa.Result',
//             name: 'result',
//             type: 'uint8',
//           },
//         ],
//         internalType: 'struct DePreMa.Wager',
//         name: '',
//         type: 'tuple',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'activityId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'externalId',
//         type: 'uint256',
//       },
//     ],
//     name: 'getWagerId',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'pure',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'bytes32',
//         name: 'requestId',
//         type: 'bytes32',
//       },
//       {
//         internalType: 'bytes',
//         name: 'response',
//         type: 'bytes',
//       },
//       {
//         internalType: 'bytes',
//         name: 'err',
//         type: 'bytes',
//       },
//     ],
//     name: 'handleOracleFulfillment',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'user',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint32',
//         name: 'predictionIdx',
//         type: 'uint32',
//       },
//     ],
//     name: 'isPredictionCorrect',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'enum DePreMa.Result',
//         name: 'result',
//         type: 'uint8',
//       },
//     ],
//     name: 'predict',
//     outputs: [],
//     stateMutability: 'payable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'wagerId',
//         type: 'uint256',
//       },
//     ],
//     name: 'readyToResolve',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: 'activityId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'externalId',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'timestamp',
//         type: 'uint256',
//       },
//       {
//         internalType: 'enum DePreMa.Result',
//         name: 'result',
//         type: 'uint8',
//       },
//     ],
//     name: 'registerAndPredict',
//     outputs: [],
//     stateMutability: 'payable',
//     type: 'function',
//   },
// ]
