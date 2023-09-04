import { config } from "dotenv";
import { formatEther } from "ethers";
import { ethers } from "hardhat";

config();
const PROTOCOL_FEE_DESTINATION = process.env.PROTOCOL_FEE_DESTINATION;

async function main() {
  const friend3V1 = await ethers.deployContract("Friend3V1");
  await friend3V1.waitForDeployment();
  console.log(`Friend3V1 deployed to ${friend3V1.target}`);

  await friend3V1.setFeeDestination(PROTOCOL_FEE_DESTINATION!);
  console.log(`setFeeDestination: ${PROTOCOL_FEE_DESTINATION}`);

  await friend3V1.setProtocolFeePercent(50000000000000000n);
  console.log(`setProtocolFeePercent: ${formatEther(50000000000000000n)}`);

  await friend3V1.setSubjectFeePercent(50000000000000000n);
  console.log(`setSubjectFeePercent: ${formatEther(50000000000000000n)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
