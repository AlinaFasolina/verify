import React from "react";
import "./styles.scss";

const DonateBtn = () => {
  const donateHandler = () => {
    window.location.replace('https://donate.stripe.com/test_14k1575ogb6EcbC9AA');
  };

  return (
    <button onClick={donateHandler} className="donate-btn">
      Donate
    </button>
  );
};

export default DonateBtn;
