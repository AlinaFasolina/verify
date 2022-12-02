import React from "react";
import ProgressBar from "../ProgressBar";
import "./styles.scss";
import { donorsCountriesList } from "../../consts/consts";
import money from "../../img/icons/money.svg";
import DonorCounriesHistory from "./DonorCounriesHistory";

const DonorCountries = ({ size }) => {
  return (
    <div
      className={`donorContrib-counties ${
        size === "sm" ? "donorContrib-counties_sm" : ""
      }`}
    >
      <h2 className="donorContrib-title">2022 DONOR CONTRIBUTIONS</h2>
      <div className="donorContrib-amount-wrapper">
        <img alt="" className="donorContrib-money-icon" src={money} />
        <div>
          <p>
            <span className="donorContrib-dollar">$</span>
            <span className="donorContrib-amount">207.9M</span>
          </p>
          <p className="donorContrib-contributions">contributions</p>
        </div>
      </div>
      {donorsCountriesList.map((item) => (
        <ProgressBar
          key={item.id}
          title={item.title}
          img={item.img}
          count={item.count}
        />
      ))}
      <DonorCounriesHistory />
    </div>
  );
};

export default DonorCountries;
