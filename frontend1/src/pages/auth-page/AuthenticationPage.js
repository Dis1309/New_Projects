import React, { useEffect, useState } from "react";
import EmailIcon from "../../assets/login-page/email.svg";
import PhoneIcon from "../../assets/login-page/phone.svg";
import WalletIcon from "../../assets/login-page/wallet.svg";
import Logo from "../../assets/ud-square-logo2.png";
import "./AuthenticationPage.css";
import EmailInput from "./components/inputs/EmailInput";
import OrderSuccess from "./components/order-verified/OrderSuccess";
import { checkUser } from "../../services/magic";
import LoginForm from "./components/login-form/LoginForm";
import AuthHeader from "./components/header/AuthHeader";
import LeftPart from "./components/left-part/LeftPart";
import ClaimOrder from "./components/order-claim/ClaimOrder";
import ConnectWallet from "./components/connect-wallet/ConnectWallet";
import MintNumber from "./components/mint-number/MintNumber";
import MintProgress from "./components/mint-progress/MintProgress";
import Loader from "../../utils/loaders/Loader";
import LoadPage from "../../utils/loaders/LoadPage";

// const magic = new Magic("pk_live_43A0D5533035547E", { network: "mainnet" });
// // const accounts = await magic.wallet.connectWithUI();

const AuthenticationPage = ({setwalletaddress, walletaddress, signer, setsigner, setcontract}) => {
  const [headerTitle, setHeaderTitle] = useState("");

  const [user, setUser] = useState({ isLoggedIn: null, email: "" });

  const [proceedTo, setProceedTo] = useState("login");
  
  


  const flowHandler = (type) => {
    switch (type) {
      case "login":
        return <LoginForm setProceedTo={setProceedTo} />;
      case "claimOrder":
        return <ClaimOrder setProceedTo={setProceedTo} />;
      case "connectWallet":
        return <ConnectWallet setProceedTo={setProceedTo} setsigner={setsigner} setwalletaddress={setwalletaddress} setcontract={setcontract}/>;
      case "mintNumber":
        return <MintNumber setProceedTo={setProceedTo} cartArray={cartArray} walletaddress={walletaddress} signer={signer}/>;
      case "mintProgress":
        return <MintProgress setProceedTo={setProceedTo} walletaddress={walletaddress} />;
      default:
        return <LoginForm setProceedTo={setProceedTo} />;
    }
  };

  const [check, setCheck] = useState(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState(null);

  // Get the query parameter string
  const queryString = window.location.search;

  // Extract the "cart" parameter value from the query string
  const urlParams = new URLSearchParams(queryString);
  const cartParam = urlParams.get("cart");

  // Split the cart parameter string at each comma and convert each element to a number
  const cartArray = cartParam ? cartParam.split(",").map(Number) : [];

  const validateUser = async () => {
    setLoading(true);
    try {
      await checkUser(setUser);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.isLoggedIn) {
      setProceedTo("claimOrder");
    }
    if (cartArray.length == 0) {
      setHeaderTitle("Sign up");
    } else {
      setHeaderTitle("Claim your nft number");
    }
    validateUser();
  }, [check, user.isLoggedIn]);

  return cartArray.length == 0 ? (
    <div className="authPageCentered">
      <LoginForm />
    </div>
  ) : loading ? (
    <LoadPage />
  ) : (
    <div className="authPage">
      <AuthHeader title={headerTitle} />
      <div className="authPageWrapper">
        <LeftPart cartArray={cartArray} currentState={proceedTo} />

        {flowHandler(proceedTo)}
      </div>
    </div>
  );
};

export default AuthenticationPage;