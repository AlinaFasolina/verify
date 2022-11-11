import React from "react";
import "./styles.scss";
import { expectedAchievementsList } from "../../consts/consts";
import AchievementsItem from "./AchievementsItem";

const Achievements = () => {
  return (
    <div className="achievements-wrapper">
      <p className="achievements-title">Expected achievements per clusters</p>
      {expectedAchievementsList.map((item) => (
        <AchievementsItem
          key={item.id}
          amount={item.amount}
          img={item.img}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Achievements;
