/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');


module.exports = {
  paths:{
    artifacts: "./src/artifacts",
  },
  networks: {
    testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      chainId: 97,
      accounts: ['']
    },
  },
  etherscan: {
    apiKey: 'NQPQD5UKR73TYG8ST8CF3GC6SNMNUEUE39'
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      "viaIR": true,
    }
  },
};


