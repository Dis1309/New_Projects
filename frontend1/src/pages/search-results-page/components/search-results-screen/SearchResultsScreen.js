import React, { useEffect, useState } from "react";
import PhoneSearchInput from "../../../../utils/inputs/PhoneSearchInput";
import "./SearchResultsScreen.css";
import PhoneNumberBox from "../../../../utils/boxes/PhoneNumberBox";
import { generateAvailableNumbers } from "../../../../functions/generateAvailableNumbers";

import { useNavigate } from "react-router-dom";

const SearchResultsScreen = ({ setProceedTo, setCartArray }) => {

  const navigate = useNavigate();

  //take initial value from query string
  const searchParams = new URLSearchParams(window.location.search);
  const [queryParam, setQueryParam] = useState(searchParams.get("n") || "");

  //update page on pressing search
  const [updatePage, setUpdatePage] = useState(false);

  const [generatedNumbers, setGeneratedNumbers] = useState([]);

  const generateNumbers = () => {
    const nums = generateAvailableNumbers(queryParam, 4);
    setGeneratedNumbers(nums);
  };

  // Array of added to cart
  const [cart, setCart] = useState([]);

  const onContinue = () => {
    setCartArray(cart);
    setProceedTo("checkOut");
  };

  useEffect(() => {
    setQueryParam(searchParams.get("n"));
    generateNumbers();
    console.log(queryParam);
  }, [updatePage]);

  return (
    <div className="searchResultsScreen">
      <PhoneSearchInput
        initialValue={queryParam}
        update={updatePage}
        setUpdate={setUpdatePage}
      />

      <div className="searchResultsMain">
        <h3>Search results</h3>
        <p>The number you are looking for is available!</p>
        <div className="searchResultsTableCol">
          <PhoneNumberBox
            number={queryParam}
            cart={cart}
            setCart={setCart}
            showAvailability={true}
            available={true}
          />
        </div>

        <div className="searchResultsMidBorder"/>

        <div className="searchResultsTable">
          Similar numbers
          {/* dropdown */}
          {/* numbers boxes */}
          <div className="searchResultsTableCol">
            {generatedNumbers.map((number, i) => (
              <PhoneNumberBox
                number={number}
                cart={cart}
                setCart={setCart}
                showAvailability={false}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>

      {cart.length > 0 && (
        <div className="searchResultClaim">
          <button className="blueRoundedBtn" onClick={() => navigate(`/signup?cart=${cart}`)}>
            continue to cart
          </button>
          Your cart
          <div>{`${cart.length}`}</div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsScreen;
