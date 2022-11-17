import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";
import "./styles.scss";
import { headerWorkDropdownItemsList } from "../../consts/consts";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/">Ukraine AID</NavLink>
      <Dropdown title="work" items={headerWorkDropdownItemsList} />
      <NavLink>news</NavLink>
      <NavLink>about</NavLink>
    </div>
  );
};

export default Menu;
