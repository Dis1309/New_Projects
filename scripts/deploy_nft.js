
const {ethers} = require("hardhat");

async function main() {
  const nft = await ethers.getContractFactory("Nft");
  const contract = await nft.deploy();
  console.log(contract.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
