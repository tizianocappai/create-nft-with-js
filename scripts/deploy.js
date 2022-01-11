async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());
    const NFT = await ethers.getContractFactory("TST"); //this value is the value inside the contract file, inside the ERC721 function, the symbol value

    // Start deployment, returning a promise that resolves to a contract object
    const nftContract = await NFT.deploy();
    console.log("Contract deployed to address:", nftContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });