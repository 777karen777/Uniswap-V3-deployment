require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
// require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-ethers");



const PRIVATE_KEY = [process.env.ACCOUNT_PRIVATE_KEY]; //
const ETHERSCAN_API_KEY = [process.env.ETHERSCAN_API_KEY];//
const OKLINK_API_KEY = [process.env.OKLINK_API_KEY];//
const ALCHEMY_API_KEY = [process.env.ALCHEMY_API_KEY];//

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24", 
  networks: {
    polygon_amoy: {
      // url: `https://polygon-amoy.infura.io/v3/${process.env.INFURA_API_KEY}`,
      url: `https://polygon-amoy.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      // url: "https://rpc-amoy.polygon.technology/",
      chainId: 80002, // Set the chain ID for Polygon Amoy testnet
      accounts: PRIVATE_KEY,
    },
  },
  etherscan: {
    apiKey: {
      polygon_amoy: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "polygon_amoy",
        chainId: 80002,
        urls: {
          apiURL: "https://rpc-amoy.polygon.technology/",
          // apiURL: `https://polygon-amoy.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
          browserURL: "https://polygon-mumbai.g.alchemy.com/v2/demo"
        }
      }
    ]
  },  
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  } 
};
