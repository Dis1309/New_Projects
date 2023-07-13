import EmailIcon from "../../../../assets/login-page/email.svg";
import PhoneIcon from "../../../../assets/login-page/phone.svg";
import WalletIcon from "../../../../assets/login-page/wallet.svg";

import EmailInput from "../inputs/EmailInput";
import { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ setProceedTo }) => {
  const [openEmail, setOpenEmail] = useState(false);

  const [user, setUser] = useState({ isLoggedIn: null, email: "" });

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState(null);

  // Get the query parameter string
  const queryString = window.location.search;

  return (
    <div
      className="loginWrapper"
      style={{ textAlign: setProceedTo ? "left" : "center" }}
    >
      {/* {!openEmail && <img className="loginWrapperLogo" src={Logo} />}
      {!openEmail && <h2>Sign up</h2>}
      {!openEmail && <p>Please sign up to continue</p>} */}

      <h2>Sign up</h2>
      <p>Start exploring our marketplace</p>

      {openEmail ? (
        <EmailInput setProceedTo={setProceedTo} />
      ) : (
        <button
          className="loginWrapperBlueBtn"
          onClick={() => setOpenEmail(true)}
          style={{cursor: "pointer"}}
        >
          <img src={EmailIcon} />
          Sign up with email
        </button>
      )}

      <button className="loginWrapperTranspBtn">
        <img src={PhoneIcon} />
        Sign up with Phone
      </button>
      <button className="loginWrapperTranspBtn">
        <img src={WalletIcon} />
        Connect your wallet
      </button>

      {/* <div className="loginSwitch">
        Already have an account? <span>Log in</span>
      </div> */}
    </div>
  );
};

export default LoginForm;
