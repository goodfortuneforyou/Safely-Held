const { network } = require("hardhat");
// const {
//   networkConfig,
//   developmentChains,
// } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

const developmentChains = ["localhost", "hardhat"];
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const { chainId } = network.config;
  const args = [];
  console.log("Deploying contracts...");
  const nftMarketplace = await deploy("NFTMarketplace", {
    from: deployer,
    log: true,
    args,
    waitConfirmations: network.config.blockConfirmations,
  });
  console.log(`FundRaiseCollective Deployed at ${nftMarketplace.address}`);
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(nftMarketplace.address, args);
  }
};
module.exports.tags = ["all"];
