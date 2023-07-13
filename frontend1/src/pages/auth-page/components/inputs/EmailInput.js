import React, { useState } from "react";

import { Magic } from "magic-sdk";
import { loginUser } from "../../../../services/magic";
import { redirect, useNavigate } from "react-router-dom";

import "./EmailInput.css";
import Loader from "../../../../utils/loaders/Loader";

const EmailInput = ({setProceedTo}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!email) {
      setLoading(false);
      setError("Email is Invalid");
      return;
    }
    try {
      await loginUser(email);
      if (setProceedTo) {
        // setProceedTo("claimOrder");
        window.location.reload()
      }
      else {
        navigate('/')
        window.location.reload()
      }
      setLoading(false);
    } catch (error) {
      setError("Unable to log in");
      console.error(error);
    }
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form className="emailInput" onSubmit={handleSubmit}>
      <div className="emailInputWrapper">
        Email address
        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>

      <div className="emailInputBtnBox">
        {loading ? (
          <Loader/>
        ) : (
          <button className="blueRoundedBtn" type="submit">
            Continue
          </button>
        )}

        <div className="emailInputBottomLine">
          <div />
          OR
          <div />
        </div>
      </div>
    </form>
  );
};

export default EmailInput;
