import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { ContractABI, ContractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const singer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    ContractAddress,
    ContractABI,
    singer
  );
  return transactionContract;
};

export const CreateEthereumContract_Context = ({ children }) => {
  const [currentAccount, setcurrentAccount] = useState("");

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) {
        return alert("please install MetaMask");
      }
      const account = await ethereum.request({ method: "eth_accounts" });
      if (account.length) {
        setcurrentAccount(account[0]);

        // getAllTransactions()
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("please install MetaMask");
      }
      const account = await ethereum.request({ method: "eth_requestAccounts" });
      setcurrentAccount(account[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);
  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
