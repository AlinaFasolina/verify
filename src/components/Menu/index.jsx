import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink>Ukraine AID</NavLink>
      <NavLink>work</NavLink>
      <NavLink>news</NavLink>
      <NavLink>about</NavLink>
      <NavLink>get involved</NavLink>
    </div>
  );
};

export default Menu;
