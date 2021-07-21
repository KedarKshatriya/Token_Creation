require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",

  networks: {
    ropsten: {
      url: "",
      accounts: [""]
    },

    rinkeby: {
      url: "",
      accounts: [""]
    },
  },

  solidity: "0.8.0",
};
