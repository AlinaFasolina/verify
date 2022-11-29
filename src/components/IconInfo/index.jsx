import React from "react";
import "./styles.scss";

const IconInfo = ({ name, icon, value, size, hasDollarSign }) => {
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
            {hasDollarSign ? "$" : ""}
          </span>
          {value}M
        </p>
        <p className="icons-info__title">{name}</p>
      </div>
    </div>
  );
};

export default IconInfo;
