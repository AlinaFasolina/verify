import React from "react";
import DonateBtn from "../common/btns/DonateBtn";
import Menu from "../Menu";
import "./styles.scss";
import logo from "../../img/icons/verify-logo.svg";
import Search from "../Search";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <div className="header-container">
      <NavLink className="header-logo-link" to="/">
        <img alt="" className="header-logo" src={logo} />
      </NavLink>
      <div className="header-right">
        <Menu />
        <DonateBtn />
        <Search />
      </div>
    </div>
  </header>
);

export default Header;
