import React from "react";
import "./styles.scss";
import TimelineItem from "./TimelineItem";

const Timeline = ({ timelineList }) => {
  return (
    <div className="timeline">
      {timelineList.slice(0).map((item) => (
        <TimelineItem
          icon={item["timeline-icon"]}
          key={item["timeline-details"]}
          descrip={item["timeline-details"]}
          month={item.month}
          amount={item["allocation-value"]}
          classname={item.classname}
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
