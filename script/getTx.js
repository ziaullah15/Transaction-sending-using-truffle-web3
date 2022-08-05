const Web3 = require('web3');
require('dotenv').config();
const MyContract = require('../build/contracts/MyContract.json');
const API_KEY = process.env.API_KEY;
const contractAdd = process.env.contractAddress;
const Address = '0x8C95B3ff914c344496fc38397Baed2cF30FAA2df';

async function getUint() {
    const web3 = new Web3(API_KEY);
    
    
    let contract = new web3.eth.Contract(
        MyContract.abi,
        contractAdd,
        web3
        );

    const getName = await contract.methods
    .getName()
    .call();
    console.log(`Tx is succesfull.`);
    console.log(`Your added value is ${getName}`)


};

getUint();