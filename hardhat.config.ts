import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configDotenv } from "dotenv";

configDotenv();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 1337,
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      chainId: 80001,
      accounts: [process.env.PRIVATE_KEY!],
    },
    bsctest: {
      url: "https://bsc-testnet.publicnode.com",
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY!],
    },
    bsc: {
      url: "https://bsc.publicnode.com",
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
