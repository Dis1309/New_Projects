import React, { useState } from "react";
import SearchResultsScreen from "./components/search-results-screen/SearchResultsScreen";
import CheckoutScreen from "./components/checkout-screen/CheckoutScreen";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {

  const [proceedTo, setProceedTo] = useState("searchResults");
  const [cartArray, setCartArray] = useState([]);

  const flowHandler = (type) => {
    switch (type) {
      case "searchResults":
        return (
          <SearchResultsScreen setProceedTo={setProceedTo} setCartArray={setCartArray}/>
        );
      case "checkOut":
        return ( 
          <CheckoutScreen cartArray={cartArray} setCartArray={setCartArray}/>
        )
      default: 
        return (
          <SearchResultsScreen />
        )
    }
  }

  return (
    <div className="searchResultsWrapper">
     {flowHandler(proceedTo)}      
    </div>
  );
};

export default SearchResultsPage;
