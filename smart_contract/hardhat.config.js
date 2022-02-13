require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/6tZEn17nw1wQd63XQUPCnB9NfvBTS6_A",
      accounts: [
        "9ede72eed5b2ce9537dc11e5a9fd1cb1b537b63aed88d9f7be0b51ff9934ef01",
      ],
    },
  },
};
