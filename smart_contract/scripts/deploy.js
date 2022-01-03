// 0xD0Cf18F690182Ee4813B16ED0C1359a2838b3bD4
const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory(
    "Transaction"
  );
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
