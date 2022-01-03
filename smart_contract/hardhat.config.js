require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/INDBBQ2XBuXmB0j-p3ZdBld-UuCptM2e",
      accounts: [
        "d00d186d398d1f5ca29992895c1b9cbb2debfad31ee74715e7f105ce48a90ee5",
      ],
    },
  },
};
