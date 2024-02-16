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

    const overrides = {
      oracle: '0xb83E47C2bC239B3bf370bc41e1459A34b41238D0',
      subscriptionId: 1986,
      source: '',
      secrets: '0x',
      gasLimit: 23,
    }

    console.log('\n__Creating contract factory__')

    const predictionGameContractFactory = await ethers.getContractFactory(
      // 'PredictionGame'
      'Lock'
    )

    console.log('\n__Creating contract__')

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
