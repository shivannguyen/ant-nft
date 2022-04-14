// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const YFIAGNftMarketplace = await hre.ethers.getContractFactory(
    "YFIAGNftMarketplace"
  );
  const yFIAGNNftMarketplace = await YFIAGNftMarketplace.deploy();

  await yFIAGNNftMarketplace.deployed();

  console.log("YFIAGNNftMarketplace deployed to:", yFIAGNNftMarketplace.address);

  
  const YFIAGLaunchPad = await hre.ethers.getContractFactory(
    "YFIAGLaunchPad"
  );
  const yFIAGNLaunchPad = await YFIAGLaunchPad.deploy();

  await yFIAGNLaunchPad.deployed();

  const Multicall = await hre.ethers.getContractFactory(
    "Multicall"
  );
  const multicall = await Multicall.deploy();

  await multicall.deployed();

  console.log("Multicall deployed to:", multicall.address);

  console.log("Launchpad deployed to:", yFIAGNLaunchPad.address);
  await yFIAGNLaunchPad.setAddressMarketplace(yFIAGNNftMarketplace.address)
  await yFIAGNLaunchPad.transferOwnership("0xeFfe75B1574Bdd2FE0Bc955b57e4f82A2BAD6bF9");
  
  await yFIAGNNftMarketplace.setPlatformFee(100);
  await yFIAGNNftMarketplace.setLaunchPad(yFIAGNLaunchPad.address);
  await yFIAGNNftMarketplace.transferOwnership("0xeFfe75B1574Bdd2FE0Bc955b57e4f82A2BAD6bF9");
  await yFIAGNNftMarketplace.setAdmin("0xeFfe75B1574Bdd2FE0Bc955b57e4f82A2BAD6bF9", true);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});