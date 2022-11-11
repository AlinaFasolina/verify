import React from "react";
import Socials from "../Socials";
import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>© PROJECT UKRAINE 2022</div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
