#Send and Get Transaction using web3.

#1. Setting up the environment

Most Ethereum libraries and tools are written in JavaScript, and one of that is Truffle. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser.

#2. Installation

$ npm i 

Save Your sensitive Information in .env file

API_KEY=""
PRIVATE_KEY=""
CONTRACT_ADDRESS=""

#3. Compiling contracts

To compile the contract run "npx hardhat compile" in your terminal. The compile task is one of the built-in tasks.

Use existing .env file in Script folder:

Before deploying smart contract first you will have to need .env file in which  you will write secret keys, mnemoics, private keys and api-key of your ethereum node. And then you use following steps.
But must memories should be memories that .env should in those folder where sendTx and getTx are placed!!!!!!!

#4. Deploying Contract

$ "npx truffle migrate --network rinkeby"

Compilation finished successfully and then migration finished succesfully and then your contract will deploy on rinkeby ethereum testnet .
The contract has been successfully deployed and is ready to be used.

#5. Sending transaction to blockchain

Send the transaction using web3-js. Run the node-js script sendTx.js present in the scripts folder, using following command:

$ node sendTx.js 

#6. You have successfuly enterName "Zia"

#7. Getting transaction from blockchain

Get the transaction using web-3-js. Run the node-js script getTx.js present in the scripts folder, using following command:

$ node getTx.js 

Tx is succesfully deployed.
Your added Name is "Zia"
