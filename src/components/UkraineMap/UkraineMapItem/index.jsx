import React from "react";
import "./styles.scss";

const UkraineMapItem = ({ region, amount, circleSize, theme, x, y }) => {
  return (
    <div
      style={{ left: x, top: y }}
      className={`map-item ${theme === "dark" ? "map-item_dark" : ""}`}
    >
      <div
        className={`map-item__top ${
          circleSize === "sm"
            ? "map-item__top_sm"
            : circleSize === "md"
            ? "map-item__top_md"
            : "map-item__top_lg"
        }`}
      >
        {circleSize && amount && <div className="map-item__circle"></div>}
        <p className="map-item__amount">{amount}</p>
      </div>
      <p className="map-item__region-name">{region}</p>
    </div>
  );
};

export default UkraineMapItem;
