async function main() {
    // Get the contract factories
    const TestDataConsumer = await ethers.getContractFactory("TestDataConsumer");
  
    // Deploy the contract
    const yourContract = await TestDataConsumer.deploy();
  
    console.log("YourContract deployed to:", yourContract.address);
  }
  
  // Execute the deployment script
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  