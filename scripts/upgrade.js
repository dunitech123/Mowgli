const { ethers, upgrades } = require("hardhat");

// async function main() {
//     const gas = await ethers.provider.getGasPrice()
//     const V1contract = await ethers.getContractFactory("SearchLongestProgram");
//     console.log("Deploying V1contract...");
//     const v1contract = await upgrades.deployProxy(V1contract, ["0xd99d1c33f9fc3444f8101754abc46c52416550d1"], {
//        gasPrice: gas, 
//     });
//     await v1contract.deployed();
//     console.log("V1 Contract deployed to:", v1contract.address);
//  }

 const UPGRADEABLE_PROXY = "0x9fff57c1552eA34345885Cac6FbB605a56b613B2";
 async function main() {
   const gas = await ethers.provider.getGasPrice()
   const V2Contract = await ethers.getContractFactory("SearchLongestProgramV2");
   console.log("Upgrading V1Contract...");
   let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract, {
    gasPrice: gas
   });
   console.log("V1 Upgraded to V2");
   console.log("V2 Contract Deployed To:", upgrade.address)
}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
 });
 