import React from "react";
import DonateBtn from "../common/btns/DonateBtn";
import Menu from "../Menu";
import "./styles.scss";
import logo from "../../img/icons/verify-logo.svg";
import Search from "../Search";

const Header = () => (
  <header>
    <div className="header-container">
      <img alt="" className="header-logo" src={logo} />
      <div className="header-right">
        <Menu />
        <DonateBtn />
        <Search />
      </div>
    </div>
  </header>
);

export default Header;
