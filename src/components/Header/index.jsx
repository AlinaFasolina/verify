import React from "react";
import DonateBtn from "../common/btns/DonateBtn";
import Menu from "../Menu";
import "./styles.scss";
import logo from "../../img/icons/verify-logo.svg";
import search from "../../img/icons/search.svg";
import { useState } from "react";

const Header = () => {
  const [isSearchVisible, setIisSearchVisible] = useState(false);
  const showSearch = () => {
    setIisSearchVisible((prev) => !prev);
  };
  return (
    <header>
      <div className="header-container">
        <img className="header-logo" src={logo} />
        <div className="header-right">
          <Menu />
          <DonateBtn />
          {isSearchVisible && (
            <input
              placeholder="Search"
              className="header-search__input"
              type="text"
            />
          )}
          <img
            className="header-search__icon"
            onClick={showSearch}
            src={search}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
