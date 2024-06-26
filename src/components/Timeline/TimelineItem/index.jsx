import React from "react";
import "./styles.scss";

const TimelineItem = ({ descrip, month, amount, icon, classname }) => {
  return (
    <div className="timeline-item">
      <p className="timeline-descrip__wrapper">{descrip}</p>
      <div className="timeline-info">
        <div className="timeline-icon__wrapper">
          <p className={`${classname} timeline-icon__circle`}>
            <img src={icon} />
          </p>
        </div>
        <div className="timeline-month__wrapper">
          <div className="timeline-month__circle">{month}</div>
        </div>
        <div className="timeline-amount__wrapper">
          {amount && <div className="timeline-amount__circle">${amount}M</div>}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
