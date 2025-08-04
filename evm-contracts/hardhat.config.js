require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Ensure your .env file has the PRIVATE_KEY variable set
const PRIVATE_KEY = process.env.PRIVATE_KEY ;



module.exports = {
  solidity: "0.8.23",
  networks: {
    // for testnet
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [process.env.PRIVATE_KEY ],
      gasPrice: 1000000000,
    },
  },

};
