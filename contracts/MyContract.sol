// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

contract MyContract {
   
 string public myName;

 function setName(string memory _myName) public {
 myName = _myName;
 }

 function getName() public view returns(string memory){
    return myName;
 }
}