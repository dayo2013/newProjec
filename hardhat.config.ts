import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import 'dotenv/config'
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      //@ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },


    base: {
      url: process.env.BASERPC,
      //@ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.BASE_API_KEY,
  },
}

export default config