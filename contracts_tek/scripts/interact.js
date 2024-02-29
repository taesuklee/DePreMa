const { ethers } = require('hardhat')

async function main() {
  const MyContract = await ethers.getContractFactory('PredictionGame')
  const myContract = await MyContract.attach(
    '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  )

  // Call contract functions here
  const num = await myContract.getNumber(1)
  console.log('Result:', num)

  const owner = await myContract.getOwner()
  console.log('🚀 ~ main ~ owner:', owner)

  const game = await myContract.createGame(1, 1)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
