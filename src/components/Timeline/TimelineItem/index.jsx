import React, { useEffect } from "react";
import { useState } from "react";
import { getCircleSize } from "../../../helpers";
import "./styles.scss";

const TimelineItem = ({ descrip, month, amount, icon, classname }) => {
  const [circleSize, setCircleSize] = useState("sm");

  useEffect(() => {
    if (amount) {
      setCircleSize(getCircleSize(amount));
    }
  }, [amount]);

  return (
    <div
      className={`timeline-item ${
        amount ? "timeline-item__with-amount" : "timeline-item__no-amount"
      }`}
    >
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
          {amount && (
            <div
              className={`timeline-amount__circle timeline-amount__circle_${circleSize}`}
            >
              ${amount}M
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
