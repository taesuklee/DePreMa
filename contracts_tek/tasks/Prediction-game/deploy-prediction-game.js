const { networks } = require('../../networks')

task('deploy-prediction-game', 'Deploys the PredictionGame contract').setAction(
  async (taskArgs) => {
    console.log(
      `Deploying PredictionGame contract to ${
        network.name
      } with args: ${JSON.stringify(taskArgs)}`
    )

    console.log('\n__Compiling Contracts__')
    await run('compile')

    const overrides = {}
    // If specified, use the gas price from the network config instead of Ethers estimated price
    if (networks[network.name].gasPrice) {
      overrides.gasPrice = networks[network.name].gasPrice
    }
    // If specified, use the nonce from the network config instead of automatically calculating it
    if (networks[network.name].nonce) {
      overrides.nonce = networks[network.name].nonce
    }

    const predictionGameContractFactory = await ethers.getContractFactory(
      'PredictionGame'
    )
    const predictionGameContract = await predictionGameContractFactory.deploy(
      overrides
    )

    console.log(
      `\nWaiting ${
        networks[network.name].confirmations
      } blocks for transaction ${
        predictionGameContract.deployTransaction.hash
      } to be confirmed...`
    )
    await predictionGameContract.deployTransaction.wait(
      networks[network.name].confirmations
    )

    console.log(
      '\nDeployed PredictionGame contract to:',
      predictionGameContract.address
    )

    if (network.name === 'localFunctionsTestnet') {
      return
    }

    console.log(
      `\nFunctionsConsumer contract deployed to ${predictionGameContract.address} on ${network.name}`
    )
  }
)
