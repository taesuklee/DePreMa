require('@nomicfoundation/hardhat-toolbox')
require('./tasks/Prediction-game')
const { networks } = require('./networks')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.24',
  networks: { ...networks },
}
