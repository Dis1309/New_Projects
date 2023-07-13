import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import SimIcon from "../../../assets/my-numbers-page/sim-icon.svg";
import ProgressIcon from "../../../assets/my-numbers-page/progress-green.svg";
import CheckedIcon from "../../../assets/my-numbers-page/check-green.svg";
import conABI from '../../../abi/abi.json';
import config from '../../../config.json';
import "./MintNumberBox.css";
import { formatPhoneNumber } from "../../../functions/formatPhoneNumber";
import { Web3Storage } from 'web3.storage'

const MintNumberBox = ({ number, setOpenModal , signer, walletaddress, contract}) => {
  // Faked timeout to show that mint is done
  const [done, setDone] = useState(false);
  const data = {
    "address": walletaddress,
    "number": number,
    "contract'address": config.address_nft
  }
  const i = 0;
  useEffect(() => {
    
      
    const performAction = async () => {
      // Your action here
      const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU0RDUzOWE5MzQyMGRCMTAzQjNkOTJBZmZCZDcxZTU4NEFkY2Q5ZWUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODkyMDE2NzQxMzIsIm5hbWUiOiJEaXNoYSJ9.7TmuKSbXjbVgIomj6Vdnnofz-B7HsNwd6WO1bozVD4g" });
      console.log(client);
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })

      const files = [
      new File([blob], 'ultimate_digits_nft'+i+'.json')
      ]
      const cid = await client.put(files);
      console.log('stored files with cid:', cid)
      try {
      console.log(contract)
      const transaction = await contract.mint("https://ipfs.io/ipfs/"+cid+"/ultimate_digits_nft0.json");
      await transaction.wait();
      console.log(transaction);
      } catch (e){
        console.log(e);
      }
      setDone(true);
    };

    const timer = setTimeout(performAction, 4000);

    // Cleanup the timer when the component unmounts or changes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mintNumberBox">
      <div className="mintNumberBoxLeft">
        <img src={SimIcon} />
        <div className="mintNumberBoxLeftNumber">
          +999 {`${number && formatPhoneNumber(number)}`}
          <div className="mintNumberBoxLeftNumberTier">Diamond Tier</div>
        </div>
      </div>

      <div className="mintNumberBoxRight">
        <div className="mintNumberBoxRightStatus">
          <h2>{done ? `Skale Blockchain` : `Minting in Progress`}</h2>
          <p>{done ? `Learn more about Skale` : `What does this mean?`}</p>
        </div>

        <div
          className="mintNumberBoxRightProgress"
          // onClick={() => setOpenModal(true)}
        >
          <img src={done ? CheckedIcon : ProgressIcon} className={!done && "loadState"} />
          {done ? `Minted` : `Minting`}
        </div>
      </div>
    </div>
  );
};

export default MintNumberBox;
