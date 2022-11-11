import React from "react";
import DonateBtn from "../common/btns/DonateBtn";
import Menu from "../Menu";
import "./styles.scss";
import logo from "../../img/icons/verify-logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img className="header-logo" src={logo} />
        <div className="header-right">
          <Menu />
          <DonateBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
