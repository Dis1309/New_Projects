import React from "react";
import './HomePageReal.css'
import Navbar from "../../layout/navbar/Navbar";

export default function HomePageReal() {
    return (
        <div className="homePageReal">
            <div className="hpr-navbar">
                --------------  Navbar comes here  -----------------
            </div>
            <div className="hpr-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M21.5 6.5H17.75C16.7554 6.5 15.8016 6.89509 15.0983 7.59835C14.3951 8.30161 14 9.25544 14 10.25V37.75C14 38.7446 14.3951 39.6984 15.0983 40.4016C15.8016 41.1049 16.7554 41.5 17.75 41.5H30.25C31.2446 41.5 32.1984 41.1049 32.9016 40.4016C33.6049 39.6984 34 38.7446 34 37.75V10.25C34 9.25544 33.6049 8.30161 32.9016 7.59835C32.1984 6.89509 31.2446 6.5 30.25 6.5H26.5M21.5 6.5V9H26.5V6.5M21.5 6.5H26.5M21.5 37.75H26.5" stroke="#5293FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <div className="hpr-content">
                <div className="text">
                    What’s your phone number?<br></br>
                </div>
                <div className="sub-text">
                    Which number would you like to use as your web3 identity
                </div>
                
            </div>
            <div className="hpr-input">
                <div className="text">Phone Number</div>
                <div className="input-area">
                    <div className="select">
                        <select>
                            <option>1</option>
                        </select>
                    </div>
                    <div className="type">
                        <input type="number"></input>
                    </div>
                </div>
                <div className="hpr-btn">
                    <button className="btn">Continue</button>
                </div>
            </div>
            <div className="hpr-footer">
                <div className="copyright">
                    &copy; Ultimate Digits 2023.
                </div>
            </div>
        </div>
    )
}