/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require("@truffle/hdwallet-provider")

const {PRIVATE_KEY, INFURA_API_KEY, BEARER_TOKEN} = require("./secrets.json")

module.exports = {
  networks: {
    gpw_prod: {
      gasPrice: 0,
      port:443,
      provider: () => new HDWalletProvider({
        privateKeys:[`0x${PRIVATE_KEY}`],
        providerOrUrl: "https://besu-rpc.unimarket.dotconnect.vc",
      }),
      network_id: "*",
    }
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.0",      // Fetch exact version from solc-bin
    }
  }
};

