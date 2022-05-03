import "@nomiclabs/hardhat-etherscan";
import { extendConfig } from "hardhat/config";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    config.etherscan.customChains.push({
      network: "mychain",
      chainId: 123456,
      urls: {
        apiURL: "https://mychainscan.io/api",
        browserURL: "https://mychainscan.io",
      },
    });
  }
);
