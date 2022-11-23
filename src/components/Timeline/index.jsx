import React from "react";
import "./styles.scss";
import TimelineItem from "./TimelineItem";

const Timeline = ({ timelineList }) => {
  return (
    <div className="timeline">
      {timelineList &&
        timelineList
          .slice(0)
          .reverse()
          .map((item) => (
            <TimelineItem
              icon={item.acf["timeline-icon"]}
              key={item.id}
              descrip={item.acf["timeline-details"]}
              month={item.acf.month}
              amount={item.acf["allocation-value"]}
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
