import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-vyper";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  vyper: {
    version: "0.3.8",
  },
  networks: {
    kairos: {
      url: "https://public-en-kairos.node.kaia.io",
      accounts: ["0x3e5b8bfad75abbc4fc25f7b1cdb8d99221cb3a45ac94ae78f516732111dbe901"]
    }
  },
  etherscan: {
    apiKey: {
      kairos: "unnecessary",
    },
    customChains: [
      {
        network: "kairos",
        chainId: 1001,
        urls: {
          apiURL: "https://compiler-api-v2.kaiascan.io/kairos/hardhat-verify",
          browserURL: "https://kairos.kaiascan.io",
        }
      },
    ]
  }
};

export default config;
