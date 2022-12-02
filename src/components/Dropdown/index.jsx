import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import caretDown from "../../img/icons/caret-down.svg";

const Dropdown = ({ title, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const dropdownRef = useRef();

  function useCloseDropdown(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useCloseDropdown(dropdownRef);

  return (
    <div ref={dropdownRef} className="dropdown">
      <p
        className={`dropdown-title ${
          isMenuOpen ? "dropdown-title_active" : ""
        }`}
        onClick={dropdownHandler}
      >
        {title} <img alt="" src={caretDown} />
      </p>
      {isMenuOpen && (
        <div className="dropdown-links-wrapper">
          {items.map((item) => (
            <NavLink key={item.title} className="dropdown-link" to={item.link}>
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
