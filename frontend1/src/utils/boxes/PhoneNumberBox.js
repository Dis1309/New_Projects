import React, { useState } from "react";
import CheckIcon from "../../assets/search-results-page/icons/check-icon.svg";
import CrossIcon from "../../assets/search-results-page/icons/cross-icon.svg";
import SimcardIcon from "../../assets/search-results-page/icons/simcard-icon.svg";

import "./PhoneNumberBox.css";
import { formatPhoneNumber } from "../../functions/formatPhoneNumber";

const PhoneNumberBox = ({
  number,
  added,
  cart,
  setCart,
  showAvailability,
  available,
}) => {
  // state for value adding to card
  const [addedToCard, setAddedToCard] = useState(added ? true : false);

  const onClick = () => {
    setAddedToCard(!addedToCard);

    // if current button "remove"
    if (addedToCard) {
      const filteredCart = cart.filter((item) => item !== number);
      setCart(filteredCart);
    }
    // if current button "add to cart"
    else {
      const newCart = [...cart, number];
      setCart(newCart);
    }
  };

  return (
    <div
      className={
        showAvailability
          ? available
            ? "phoneNumberBox availableBorder"
            : "phoneNumberBox notAvailableBorder"
          : "phoneNumberBox"
      }
    >
      {/* Left Side */}
      <div className="phoneNumberBoxLeft">
        <img
          src={
            showAvailability ? (available ? CheckIcon : CrossIcon) : SimcardIcon
          }
        />
        <div className="phoneNumberResult">
          +999 {`${number && formatPhoneNumber(number)}`}
          <div className="phoneNumberResultStatus">
            {showAvailability && (
              <div
                className={
                  available ? "statusDiv greenStatus" : "statusDiv orangeStatus"
                }
              >
                {available ? `Available` : `Unavailable`}
              </div>
            )}
            <div className="statusDiv darkblueStatus">Diamond Tier</div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      {(available === true || showAvailability === false) && (
        <div className="phoneNumberBoxRight">
          {`US$5`}
          <button
            className={addedToCard ? "transparentRoundedBtn" : "blueRoundedBtn"}
            onClick={onClick}
          >
            {addedToCard ? `Remove` : `Add to Cart`}
          </button>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberBox;
