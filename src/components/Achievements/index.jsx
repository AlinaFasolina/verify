import React from "react";
import "./styles.scss";
import AchievementsItem from "./AchievementsItem";
import { fetchAchievementsPerCluster } from "../../store/achievementsPerClusterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Achievements = () => {
  const achievementsPerCluster = useSelector(
    (state) => state.achievementsPerCluster
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAchievementsPerCluster());
  }, [dispatch]);

  return (
    <div className="achievements-wrapper">
      <p className="achievements-title">Expected achievements per clusters</p>
      {achievementsPerCluster?.achievementsList?.length &&
        achievementsPerCluster.achievementsList.map((item) => (
          <AchievementsItem
            key={item.acf.details}
            value={item.acf.value}
            img={item.acf.icon}
            text={item.acf.details}
          />
        ))}
    </div>
  );
};

export default Achievements;
