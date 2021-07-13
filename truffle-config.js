var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "Bet";

module.exports = {
  networks : {
    development : {
      host : "127.0.0.1",
      port : 7545,
      network_id : "5777"
    }
  },
  rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic,  "https://rinkeby.infura.io/v3/<INFURA_Access_Token>");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
 }
}