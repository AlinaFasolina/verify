import React from "react";
import Facebook from "../../img/soc-icons/Facebook";
import Instagram from "../../img/soc-icons/Instagram";
import Twitter from "../../img/soc-icons/Twitter";
import Youtube from "../../img/soc-icons/Youtube";
import "./styles.scss";

const Socials = () => {
  return (
    <div className="socials-wrapper">
      <a className="socials-link" href="/#">
        <Facebook />
      </a>
      <a className="socials-link" href="/#">
        <Twitter />
      </a>
      <a className="socials-link" href="/#">
        <Instagram />
      </a>
      <a className="socials-link" href="/#">
        <Youtube />
      </a>
    </div>
  );
};

export default Socials;
