import React from "react";
import "./LandingPage.css";
import  topLogo from '../../assets/ud-logo.png'
import iPhone from '../../assets/iPhone.png'
import iPhoneBack from '../../assets/iPhoneBack.png'
import ellipse from '../../assets/Ellipse.png'

export default function LandingPage() {
  return (
    <div className="landing-page">
        <div className="landing-content">
            <div className="ud-logo" >
                <img src={topLogo} className="img-logo" alt="ultimate digits"></img>
            </div>
            <div className="landing-heading">
                Your Web3 Mobile Number
            </div>
            <div className="landing-subheading">
                Join the revolution of seamless web3 communication
            </div>
            <div className="landing-btn">
                <button className="signup-btn">Join Now</button>
                <button className="login-btn">Login</button>
            </div>
            <div className="landing-image">
                <img src={ellipse} className="img-ellipse" alt="img"></img>
            </div>
        </div>
    </div>
  );
}
