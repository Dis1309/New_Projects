import React from "react";

import "./ConnectWallet.css";
import config from '../../../../config.json'
import conABI from '../../../../abi/abi.json'
import { ethers } from "ethers";
import MetamaskIcon from "../../../../assets/login-page/order-claim/metamask-icon.png";

const ConnectWallet = ({setProceedTo,  setsigner, setwalletaddress, setcontract}) => {

  async function getAccount() {
    try {
      // POLYGON MAINNET REQUEST FOR ACCOUNTS ... TO CONNECT TO METAMASK
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }],
      });
    } catch (switchError) {
      var next = 97;
      // This error code indicates that the chain has not been added to MetaMask.{Uncomment to use}
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x" + next.toString(16),
                chainName: "Binance Smart Chain Testnet",
                nativeCurrency: {
                  name: "BNB",
                  symbol: "BNB",
                  decimals: 18,
                },
                rpcUrls: [
                  "https://bsc-dataseed.binance.org/"
                  // " https://polygon-mainnet.infura.io ",
                  // "https://rpc.ankr.com/polygon",
                  // "https://polygon-bor.publicnode.com",
                ] /* ... */,
              },
            ],
          });
        
          // THIS IS THE POLYGON MUMBAI REQUEST FOR ACCOUNTS... TO CONNECT TO METAMASK {uncomment to use}
        //   await window.ethereum.request({
        //     method: "wallet_switchEthereumChain",
        //     params: [{ chainId: "0x13881" }],
        //   });
        // } catch (switchError) {
        //   var next = 80001;
        //   // This error code indicates that the chain has not been added to MetaMask.
        //   if (switchError.code === 4902) {
        //     try {
        //       await window.ethereum.request({
        //         method: "wallet_addEthereumChain",
        //         params: [
        //           {
        //             chainId: "0x" + next.toString(16),
        //             chainName: "Polygon Testnet",
        //             nativeCurrency: {
        //               name: "MATIC",
        //               symbol: "MATIC",
        //               decimals: 18,
        //             },
        //             rpcUrls: [
        //               " https://polygon-mainnet.infura.io ",
        //               "https://rpc.ankr.com/polygon",
        //               "https://polygon-bor.publicnode.com",
        //             ] /* ... */,
        //           },
        //         ],
        //       });
        } catch (addError) {
          console.log(addError);
        }
      }
      // handle other "switch" errors
    }
      const provider = new ethers.BrowserProvider(window.ethereum);
    console.log(provider);

    //This is used to acces the checked in accounts
    provider
      .getSigner()
      .then((res) => {
        setsigner(res);
        console.log(res);
       
        const contract = new ethers.Contract(config.address_nft, conABI, res);
        setcontract(contract);
        var walletaddress = res.address;
        // console.log(res.address);

      //  res.address;
        console.log(walletaddress);
        setwalletaddress(walletaddress);
        // console.log(wallet);
        setProceedTo("mintNumber");
      })
      .catch((err) => {
        console.log(err);
      });
      
    }
  return (
    <div className="connectWallet">
      <h1>Connect your wallet</h1>
      <p>
        Once minted your wallet address will be set as the phone number owner.
      </p>

      <button className="blueRoundedBtn" onClick= {getAccount}>
        Connect your metamask wallet
        <img src={MetamaskIcon} />
      </button>
      <button className="transparentRoundedBtn" onClick={()=>setProceedTo("mintNumber")}>
        Create a Metamask wallet
        <img src={MetamaskIcon} />
      </button>
    </div>
  );
};

export default ConnectWallet;