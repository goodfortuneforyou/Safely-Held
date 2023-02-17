// require("dotenv").config();
// // require("hardhat-deploy");
require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
// require("@nomiclabs/hardhat-etherscan");
// const privateKey = fs.readFileSync("./secret").toString().trim();
// const { RPC_URL } = process.env;
// const { FORKING_RPC_URL } = process.env;
// const { PRIVATE_KEY } = process.env;
// const { ETHERSCAN_API_KEY } = process.env;
// /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      chainId: 5,
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      blockConfirmations: 6,
    },
  },
  solidity: "0.8.4",
  // defaultNetwork: "hardhat",
  //   networks: {
  //     hardhat: {
  //       // forking: {
  //       //   url: FORKING_RPC_URL,
  //       // },
  //       chainId: 31337,
  //       blockConfirmations: 1,
  //     },
  //     goerli: {
  //       chainId: 5,
  //       url: RPC_URL,
  //       accounts: [PRIVATE_KEY],
  //       blockConfirmations: 6,
  //     },
  //   },
  //   namedAccounts: {
  //     deployer: {
  //       default: 0,
  //     },
  //   },
  //   etherscan: {
  //     apiKey: ETHERSCAN_API_KEY,
  //   },
};
