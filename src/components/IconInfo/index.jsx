import React from "react";
import "./styles.scss";

const IconInfo = ({ title, icon, amount, size, hasDollarIcon }) => {
  return (
    <div
      className={`icons-info ${
        size === "sm" ? "icons-info__sm" : "icons-info__lg"
      }`}
    >
      <div className="icons-info__icon">
        <img src={icon} />
      </div>
      <div>
        <p className="icons-info__amount">
          <span className="icons-info__dollar-icon">
            {hasDollarIcon ? "$" : ""}
          </span>
          {amount}
        </p>
        <p className="icons-info__title">{title}</p>
      </div>
    </div>
  );
};

export default IconInfo;
