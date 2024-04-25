import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import 'dotenv/config' //

const PRIVATE_KEY = [process.env.ACCOUNT_PRIVATE_KEY]; //
const ETHERSCAN_API_KEY = [process.env.ETHERSCAN_API_KEY];//
const OKLINK_API_KEY = [process.env.OKLINK_API_KEY];//
const ALCHEMY_API_KEY = [process.env.ALCHEMY_API_KEY];//


export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false, 
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    bnb: {
      url: `https://bsc-dataseed.binance.org/`,
    },
    polygon_amoy: {
      // url: `https://polygon-amoy.infura.io/v3/${process.env.INFURA_API_KEY}`,
      url: `https://polygon-amoy.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
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
  solidity: { 
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}



// git clone https://github.com/Uniswap/uniswap-v3-core.git
// cd uniswap-v3-core
// npm install --save-dev hardhat
// npx hardhat init
// npx hardhat compile
// mkdir scripts && touch scripts/deploy.ts
// // Copy deploy.ts code to our local file and explain
// // MAke changes in hardhat config file.
// npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers dotenv
// // Create .env file with neded private codes 
// npx hardhat run --network hardhat scripts/deploy.ts
// npx hardhat run scripts/deploy.ts --network polygon_amoy
