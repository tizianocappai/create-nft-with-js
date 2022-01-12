# Create NFT with JS

this is a step by step guide on how to create an **NFT** using javascript from scratch

### Built With

This are all the things that we need:

- [Node](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)
- [Alchemy](https://www.alchemy.com/)
- [Metamask](https://metamask.io/)
- [Faucet](https://faucet.ropsten.be/)
- [Hardat](https://hardhat.org/)
- [Pinata](https://pinata.cloud/)
- [Etherscan](https://ropsten.etherscan.io/)


## Create an Alchemy account
[Alchemy](https://www.alchemy.com/) help us create our NFT.
Navigate to the website and register your account.
Navigate to the Alchemy dashboard where you’ll see a screen titled “Create your first app”.
Select **Ropsten** as the test network for the application.

## Create an Ethereum account

For this example we use [Metamask](https://metamask.io/).
**Metamask** is available as a Chrome extension.

Once you’ve installed **MetaMask** and created an account, open the MetaMask extension in Chrome and select the **Ropsten Test Network** from the list of networks.

## Need some ETH?

[Faucet](https://faucet.ropsten.be/) is the tool that we need!
First, enter your wallet address, which you can copy from the top of **Metamask**, and the site will send **1ETH** to your wallet.

## Time to Action

Clone this Repo and open the root folder.
Open the terminal in the root folder and do  `npm i`

## Hardat Env

[Hardat](https://hardhat.org/) is a development environment.
In this project you will already find a **Hardat** configuration file ready to use.

## Connecting MetaMask to the project

In your Chrome browser, open up the MetaMask extension, click the three dots in the top right, and select the **Account Details** option. **Next, click the Export Private Key** button. Enter your password to see your private key, then copy it.

After this you will find a .env file in your project.
Fill the environment variables with your data in your wallet.

## Hardat Compile

Now is the time to compile!
Run `npx hardhat compile` in the root.

You should see a success message like the one below. You can ignore the warnings that appear in the terminal.

## Deploy Script

In the scripts folder you will find a file call deploy.js.
This file allow us to deploy our smart contract to the Ethereum blockchain.

Now, we can run the Hardhat deploy task.

    npx hardhat run scripts/deploy.js --network ropsten
We add the `--network ropsten` flag to tell Hardhat to connect to a specific network, in our case, Ropsten.

After a few seconds, we can see the newly created address for our smart contract.

To verify that your smart contract was deployed copy the Contract deployed to address value in the console, go to [Ropsten Etherscan](https://ropsten.etherscan.io/) and paste it into the search bar.

## Mint NFTs

In your script folder you will find a mint-nft.js file.

Replace the value in `const contractAddress` with your Contract deployed to address value.

## Uploading NFT metadata to Pinata

[Pinata](https://pinata.cloud/)  is a platform for using IPFS protocol to store our NFT’s metadata. If you haven’t already, create an account.

Once you’re signed in, select the teal  **upload**  button, click  **File**, then select an image that you want to become a NFT .

In the root of this project i've just created a nft-metadata.json file that contains all the metadata for our NFT. (replace the current data value with yours value).

In the image value you need to use the prefix https://ipfs.io/ipfs/ + [your IPFS CID] that you can find in Pinata

Save the file then head back to Pinata to upload the file.

## Creating an instance of our contract
Go to the mint-nft.js file.
In the last line you will see a mintNFT function, change the value inside with the correct CID to the JSON file that we uploaded to Pinata

## The Grand Finale
Now go on the terminal always in the root and do `node scripts/mint-nft.js`

if you followed all the steps correctly you should see a success message confirming the creation of your NFT

Now, we’ll go to the [Alchemy Mempool](https://dashboard.alchemyapi.io/mempool), which tracks the status of all the transactions happening on our account without having to use Etherscan.

You can also search your contract address on [Etherscan](https://ropsten.etherscan.io/) a see all the record of your NFT

([back to top](https://github.com/tizianocappai/create-nft-with-js#top))

## Adding our NFT to our MetaMask wallet

1.  Check connection to the Ropsten Test Network
2.  Open MetaMask wallet extension
3.  Click the  **add token**  button
4.  Copy the contract address of your new token from Etherscan and paste it into MetaMask. MetaMask will automatically generate the token’s symbol.
5.  Click  **next**  to add the token to your wallet

([back to top](https://github.com/tizianocappai/create-nft-with-js#top))

## Adding our NFT to our MetaMask wallet (Mobile Version)

1. Download the Metamask app and log in
2. At the top select Ropsten Test Network
3. Click  **NFTs**  button
4. Click  **Import NFTs**  button
5. Copy the contract address of your new token from Etherscan and paste it into MetaMask.
6. Go to [Etherscan](https://ropsten.etherscan.io/) search your contract address, to the right you will have TokenTracker field click on it then at the bottom you can see your TokenId, copy and paste into Metamask.
7. Click  **Import **  to add your NFT to your wallet

([back to top](https://github.com/tizianocappai/create-nft-with-js#top))