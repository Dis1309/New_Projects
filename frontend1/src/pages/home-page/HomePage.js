import "./HomePage.css";
import LowerArcImg from "../../assets/home-page/lower-arc.png";
import IphoneImg from "../../assets/home-page/iphone.png";
import Logo from "../../assets/ud-square-logo2.png";
import CheckIcon from "../../assets/home-page/check-icon.svg";
import PhoneSearchInput from "../../utils/inputs/PhoneSearchInput";
import { useState } from "react";

const HomePage = () => {
  //update page on pressing search
  const [updatePage, setUpdatePage] = useState(false);

  return (
    <div className="homePage">
      {/* Title Top */}

      <div className="homePageTitle">
        <div className="homePageBackgroundGradient" />

        <img src={Logo} />

        <h3>Your Web3 Mobile Number</h3>

        <p>The only wallet address you ever need to share.</p>
      </div>

      {/* Input Field */}
      <div className="homePageInputWrapper">
        <PhoneSearchInput update={updatePage} setUpdate={setUpdatePage} />
        <p>
          <img src={CheckIcon} />
          Enter 10 digits
        </p>
      </div>

      {/* <div className="lower">
        <img src={LowerArcImg} className="lower_arc"/>
        <div className="iphone_bottom">
          <img src={IphoneImg}/>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
