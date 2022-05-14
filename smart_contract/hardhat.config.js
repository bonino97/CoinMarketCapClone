require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://speedy-nodes-nyc.moralis.io/15393db2df480e6f82e4bf86/eth/rinkeby",
      accounts: [
        "3937c8148b06043dcd2822580179cdd415e587dfc1f4a848955afeea36180ca0",
      ],
    },
  },
};
