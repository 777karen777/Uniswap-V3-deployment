const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("Weth9Module", (m) => {
const weth9 = m.contract("WETH9");
return { weth9 };
});