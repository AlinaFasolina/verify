import React from "react";
import DonateBtn from "../common/btns/DonateBtn";
import Menu from "../Menu";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div>logo</div>
        <div className="header-right">
          <Menu />
          <DonateBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
