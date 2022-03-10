require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/gjl_MJXG1-8hlLDm_w67RHz7qGHG0X9Z',
      accounts: [
        '0de4ee30e6c9282b0ab55a76e352ed7aad6e2a87d72aa80183f824e60e5b663e',
      ],
    },
  },
};
