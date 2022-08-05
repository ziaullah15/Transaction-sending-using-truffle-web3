const Web3 = require('web3');
const MyContract = require('../build/contracts/MyContract.json');
const API_KEY = process.env.API_KEY;
const contractAdd = process.env.contractAddress;
require('dotenv').config();
const Address = "0x8C95B3ff914c344496fc38397Baed2cF30FAA2df";
const HDWalletProvider = require('@truffle/hdwallet-provider');
const PRIVATE_KEY = process.env.PRIVATE_KEY;

async function setName(_myName) {

    const provider = new HDWalletProvider(PRIVATE_KEY, API_KEY);

    const web3 = new Web3(provider);

    let contract = new web3.eth.Contract(
        MyContract.abi,
        contractAdd,
        provider,
    );

    let setName = await contract.methods.setName(_myName).send({from: Address});
    console.log(`Your Name`);
    console.log(setName);
    console.log(`congrats You enter your name ${_myName}`);
}

setName("Zia");