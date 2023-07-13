import React, { useEffect } from "react";
import navbarData from "./navbar.data";
import Logo from "../../assets/ud-logo.png";
import "./Navbar.css";
import { checkUser, logoutUser } from "../../services/magic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneIcon from "../../assets/navbar/phone-icon.svg";
import ArrowDown from "../../assets/navbar/arrow-down.svg";

const Navbar = ({ loggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser().then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <img
          src={Logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="navbarLogo"
        />

        {/* Old version */}
        {/* <div className="navbarTextRow">
          {navbarData.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div> */}

        <div className="navbarRightSide">
          {loggedIn ? (
            // <>
            // <div className="navbarRightDiv">
            //   <img src={PhoneIcon} />
            //   Get a new number
            // </div>
            // <div className="navbarRightDiv">
            //   My Account
            //   <img src={ArrowDown} />
            // </div>
            // </> :
            <div className="navbarRightDiv" onClick={() => handleLogout()}>
              Sign out
            </div>
          ) : (
            <div className="navbarRightDiv" onClick={() => navigate("/signup")}>
              Sign in
            </div>
          )}
        </div>

        {/* {loggedIn && <button onClick={logoutUser}>logout</button>}
        {!loggedIn && <button>login</button>} */}
      </div>
    </div>
  );
};

export default Navbar;
