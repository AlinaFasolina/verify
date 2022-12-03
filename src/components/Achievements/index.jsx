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

  const records = achievementsPerCluster?.achievementsList?.acf?.data || [];

  return (
    <div className="achievements-wrapper">
      <p className="achievements-title" id="expected-achievements-clusters">
        Expected achievements per clusters
      </p>
      {records &&
        records.length > 0 &&
        records.map((item) => (
          <AchievementsItem
            key={item.details}
            value={item.value}
            img={item.icon}
            text={item.details}
          />
        ))}
    </div>
  );
};

export default Achievements;
