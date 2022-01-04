// https://eth-ropsten.alchemyapi.io/v2/BsvIjQVi5kWk6qdW5PqEVlF-DAowEjjo

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/BsvIjQVi5kWk6qdW5PqEVlF-DAowEjjo',
      accounts: [ '0e2a71944f9d4ad7321bd9c9eca6920574afb7eab38276ac2a63e74feb825518' ]
    }
  }
}