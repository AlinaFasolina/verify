import React from "react";
import "./styles.scss";

const AchievementsItem = ({ img, amount, text }) => {
  return (
    <div className="achievementsItem">
      <img className="achievementsItem__img" src={img} />
      <p>
        <span className="achievementsItem__amount">{amount}K</span>
        <span className="achievementsItem__text">{text}</span>
      </p>
    </div>
  );
};

export default AchievementsItem;
