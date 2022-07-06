import "@nomiclabs/hardhat-etherscan";
import { extendConfig } from "hardhat/config";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    const defaultNetwork = userConfig.defaultNetwork
      ? userConfig.defaultNetwork
      : "alfajores";
    config.defaultNetwork = defaultNetwork;
    config.etherscan.customChains.push({
      network: "alfajores",
      chainId: 44787,
      urls: {
        apiURL: "https://api.celoscan.xyz/api",
        browserURL: "https://celoscan.xyz",
      },
    });
  }
);
