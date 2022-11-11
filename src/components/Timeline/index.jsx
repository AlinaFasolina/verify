import React from "react";
import "./styles.scss";
import TimelineItem from "./TimelineItem";
import { timelineList } from "../../consts/consts";

const Timeline = () => {
  return (
    <div className="timeline">
      {timelineList.map((item) => (
        <TimelineItem
          descrip={item.descrip}
          month={item.month}
          amount={item.amount}
        />
      ))}
      <div className="timeline-vertical">
        <p className="timeline-vertical__year">2022</p>
        <p className="timeline-vertical__allocation">Allocation</p>
      </div>
    </div>
  );
};

export default Timeline;
