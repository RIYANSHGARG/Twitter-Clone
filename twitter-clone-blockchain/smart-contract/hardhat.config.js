require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/DBCttqbbmZv22C61y5JYZ5lBw_WdvD9A",
      accounts: [
        "d28301cc4263261fa88028203106265e94caa04af5646252391a684793568c47",
      ],
    },
  },
};
