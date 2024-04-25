import { ethers } from "hardhat";
import FACTORY_JSON from "../artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json";


const FACTORY_ABI = FACTORY_JSON.abi;
const FACTORY_BYTECODE = FACTORY_JSON.bytecode;

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const UniswapV3Factory = await ethers.getContractFactory("UniswapV3Factory");
  const deployedFactory = await UniswapV3Factory.deploy();

  console.log("Uniswap V3 Factory address:", deployedFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
