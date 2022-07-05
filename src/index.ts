import "@nomiclabs/hardhat-etherscan";
import { extendConfig } from "hardhat/config";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    config.etherscan.customChains.push({
      network: "alfajores",
      chainId: 44787,
      urls: {
        apiURL: "https://alfajores-blockscout.celo-testnet.org/api",
        browserURL: "https://alfajores-blockscout.celo-testnet.org",
      },
    });
  }
);
