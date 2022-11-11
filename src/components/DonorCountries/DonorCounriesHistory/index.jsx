import React from "react";
import "./styles.scss";

const DonorCounriesHistory = () => {
  return (
    <div className="donorContrib-history">
      <div className="donorContrib-history__top">
        <p className="donorContrib-history__square"></p>
        <p className="donorContrib-history__label">Paid Contribution</p>
      </div>
      <p className="donorContrib-history__currency">Allocations in US$</p>
    </div>
  );
};

export default DonorCounriesHistory;
