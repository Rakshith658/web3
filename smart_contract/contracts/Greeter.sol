//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transaction{
    uint256 transactionCount;

    event tranfer(address from,address receiver,uint amount,string message,uint256 timestamp,string account,string keyword);

    struct TransactionStruct{
        address from;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string account;
        string keyword;
    }

    TransactionStruct[] transactions;

    function addToBlockChain(address payable receiver,uint amount,string memory message, string memory account,string memory keyword)public{
        transactionCount +=1;
        transactions.push(TransactionStruct(msg.sender,receiver,amount,message,block.timestamp,account,keyword));

        emit tranfer(msg.sender,receiver,amount,message,block.timestamp,account,keyword);
    }
    function getAllTransactions()public view returns(TransactionStruct[] memory){
        return transactions;
    }
    function getAllTransactionCount()public view returns(uint256){
        return transactionCount;
    }
}
