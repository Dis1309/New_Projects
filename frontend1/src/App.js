import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import HomePageReal from "./pages/home-page/HomePageReal";
import AuthenticationPageReal from "./pages/auth-page/AuthenticationPageReal";
import ConfirmationPageReal1 from "./pages/confirmation-page/ConfirmationPageReal1";
import SelectionPage from "./pages/selection-page/SelectionPage";
import Navbar from "./layout/navbar/Navbar";
import HomePage from "./pages/home-page/HomePage";
import AuthenticationPage from "./pages/auth-page/AuthenticationPage";
import SearchResultsPage from "./pages/search-results-page/SearchResultsPage";
import { checkUser } from "./services/magic";
import React, { useState, useEffect } from "react";
import { Navigate, Routes, Route, BrowserRouter, Router } from "react-router-dom";
import MyNumbersPage from "./pages/my-numbers-page/MyNumbersPage";
import LoadPage from "./utils/loaders/LoadPage";

// function App() {
//   const [user, setUser] = useState({ isLoggedIn: null, email: "" });
//   const [loading, setLoading] = useState(true);
//   const [contract, setcontract] = useState({});
//   const [signer , setsigner] = useState({});
//   const [walletaddress, setwalletaddress] = useState(null);

//   const validateUser = async () => {
//     try {
//       await checkUser(setUser);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   console.log(window.location.pathname);
//   useEffect(() => {
//     validateUser();
//   }, []);

//   return (
//     <BrowserRouter>
//      {!loading &&
//       <div className="App">
     
//         <Navbar loggedIn={user.isLoggedIn} />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path={"/search-results"} element={<SearchResultsPage />} />
//           <Route path={"/signup"} element={<AuthenticationPage walletaddress={walletaddress} setwalletaddress={setwalletaddress} signer={signer} setsigner={setsigner} setcontract={setcontract}/>} />
//           <Route path={"/my-numbers"} element={<MyNumbersPage signer={signer} walletaddress={walletaddress} contract={contract}/>} />
//         </Routes>
//       </div>}
//     </BrowserRouter>
//   );
// }

// export default App;

export default function App(){
  return (
    <AuthenticationPageReal />
  )
}