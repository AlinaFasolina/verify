import React from "react";
import "./styles.scss";
import { getRegionName } from "../../../helpers";

const UkraineMapItem = ({ region, amount, circleSize }) => {
  return (
    <div className={`map-item map-item__${region}`}>
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
        {amount && <p className="map-item__amount">{amount}M</p>}
      </div>
      <p className="map-item__region-name">{getRegionName(region)}</p>
    </div>
  );
};

export default UkraineMapItem;
