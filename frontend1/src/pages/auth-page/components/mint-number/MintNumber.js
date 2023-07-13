import React from "react";

import "./MintNumber.css";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { formatPhoneNumber } from "../../../../functions/formatPhoneNumber";

const MintNumber = ({ setProceedTo, cartArray, walletaddress, signer }) => {
  const navigate = useNavigate();
  async function buynumber (){
    // send to which address ?
    const toaddress = "0x11AE0a9fD5D5A6ff41e218a042B3c537e6A56ce1"
    const amount = 0.001
    let amt = ethers.parseUnits(amount.toString());
    const transacamount = "0x" + amt.toString(16);    


    // const txHash = await signer.sendTransaction({
    //   to: toaddress,
    //   value : transacamount
    // });

      try {
        signer.sendTransaction({
          to: toaddress,
          value : transacamount
        })
        .then((txHash) => {
          console.log(txHash.hash);
        setProceedTo("mintProgress");
        })
        .catch((e) => {
          console.log(e);
        })
    }
    catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="mintNumber">
      <h1>Mint your number</h1>
      <p>
        You are minting the following numbers:
        {cartArray.map((number, i) => (
          <span className="mintNumberSpanNumber" key={i}>+999 {`${number && formatPhoneNumber(number.toString())}`}</span>
        ))}{" "}
        {<br/>}
        Number owner will be assigned to the following wallet address:
        <span> {`${walletaddress}`}</span>
      </p>

      <button
        className="blueRoundedBtn"
        onClick={buynumber}
        
      >
        Confirm
      </button>
      <a onClick={() => navigate(-1)}>Cancel</a>
    </div>
  );
};

export default MintNumber;