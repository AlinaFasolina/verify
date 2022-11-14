import React from "react";
import Socials from "../Socials";
import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-copyright">© PROJECT UKRAINE 2022</div>
        <div className="footer-socials">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
