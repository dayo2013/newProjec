import { ethers } from "hardhat";

async function main() {

    const multisigfactory = await ethers.deployContract('MultiSigFactory'
        
    )

   await  multisigfactory.waitForDeployment()


    console.log(`\n
    multisigfactory deployed at ${multisigfactory.target}`)
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
