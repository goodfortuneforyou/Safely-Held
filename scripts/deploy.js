const hre = require("hardhat");
const { network, run } = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.deployed();

  console.log("NFTMarketplace deployed to:", nftMarketplace.address);
  if (network.config.chainId == 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("verifying contracts...");
    try {
      await run("verify:verify", {
        address: nftMarketplace.address,
        constructorArguments: [],
      });
    } catch (e) {
      if (e.message.toLowerCase.includes("already verified")) {
        console.log("Already verified");
      } else {
        console.log(e);
      }
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
