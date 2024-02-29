// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  // const unlockTime = currentTimestampInSeconds + 60
  // const lockedAmount = hre.ethers.parseEther('0.001')
  // const lock = await hre.ethers.deployContract('Lock', [unlockTime], {
  //   value: lockedAmount,
  // })
  // await lock.waitForDeployment()
  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // )

  console.log('Deploying SC.')
  // const sc = await hre.ethers.deployContract('PredictionGame', {
  //   oracle: '0xb83E47C2bC239B3bf370bc41e1459A34b41238D0',
  //   subscriptionId: 1986,
  //   source: '',
  //   secrets: '0x',
  //   gasLimit: 23,
  // })
  const sc = await hre.ethers.deployContract('FunctionsConsumer', [
    '0xb83E47C2bC239B3bf370bc41e1459A34b41238D0',
  ])
  console.log(`Deployed: ${sc.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
