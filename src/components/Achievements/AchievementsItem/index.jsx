import React from "react";
import "./styles.scss";

const AchievementsItem = ({ img, value, text }) => {
  return (
    <div className="achievementsItem">
      <img className="achievementsItem__img" src={img} />
      <p>
        <span className="achievementsItem__amount">{value}K</span>
        <span className="achievementsItem__text">{text}</span>
      </p>
    </div>
  );
};

export default AchievementsItem;
