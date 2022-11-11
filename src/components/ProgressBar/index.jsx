import React from "react";
import "./styles.scss";

const ProgressBar = ({ title, img, count }) => {
  return (
    <div className="progressBar__item">
      <span className="progressBar__country">{title}</span>
      {img && <img className="progressBar__flag" src={img} />}
      <div className="progressBar-line" style={{ width: `${count}%` }}></div>
      <span>{count}</span>
    </div>
  );
};

export default ProgressBar;
