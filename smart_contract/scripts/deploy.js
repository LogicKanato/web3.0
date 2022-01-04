
// const main = async () => {
//   const Transactions = await hre.ethers.getContractFactory("Transactions");
//   const transactions = await Transactions.deploy();

//   await transactions.deployed();

//   console.log("Transactions deployed to:", transactions.address);
// }

// const runMain = async () => {
//   try {
//     await main();
//     ProcessingInstruction.exit(0);
//   } catch (error) {
//     console.error(error);
//     ProcessingInstruction.exit(1);
//   }
// }

// runMain();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  console.log("Token address:", transactions.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });