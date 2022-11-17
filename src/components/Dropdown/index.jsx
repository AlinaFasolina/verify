import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import caretDown from "../../img/icons/caret-down.svg";

const Dropdown = ({ title, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="dropdown">
      <p
        className={`dropdown-title ${
          isMenuOpen ? "dropdown-title_active" : ""
        }`}
        onClick={dropdownHandler}
      >
        {title} <img src={caretDown} />
      </p>
      {isMenuOpen && (
        <div className="dropdown-links-wrapper">
          {items.map((item) => (
            <NavLink className="dropdown-link" to={item.link}>
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
