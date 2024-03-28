import React, { useEffect } from "react";
import ProgressBar from "../ProgressBar";
import "./styles.scss";
import { donorsCountriesList } from "../../consts/consts";
import money from "../../img/icons/money.svg";
import DonorCounriesHistory from "./DonorCounriesHistory";
import { useDispatch, useSelector } from "react-redux";
import { fetchStripeData } from "../../store/stripeSlice";

const DonorCountries = ({ size }) => {
  const stripeInfo = useSelector((state) => state.stripe);

  const stripeRecords = stripeInfo?.donationsList?.data || null;

  const stripeDonations =
    stripeRecords &&
    stripeRecords.map((item) => {
      return {
        name: item["billing_details"].address.country,
        value: item["amount_captured"],
      };
    });

  console.log("stripeRecords", stripeRecords);
  console.log("stripeDonations", stripeDonations);

  var holder = {};

  stripeDonations &&
    stripeDonations.forEach(function (obj) {
      if (holder.hasOwnProperty(obj.name)) {
        holder[obj.name] = holder[obj.name] + obj.value;
      } else {
        holder[obj.name] = obj.value;
      }
    });

  var stripeDonationsByCountries = [];

  for (var prop in holder) {
    stripeDonationsByCountries.push({ name: prop, value: holder[prop] });
  }

  console.log("stripeDonationsByCountries", stripeDonationsByCountries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStripeData());
  }, [dispatch]);

  return (
    <div
      className={`donorContrib-counties ${
        size === "sm" ? "donorContrib-counties_sm" : ""
      }`}
    >
      <h2 className="donorContrib-title" id="donor-contributions">
        2022 DONOR CONTRIBUTIONS
      </h2>
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
