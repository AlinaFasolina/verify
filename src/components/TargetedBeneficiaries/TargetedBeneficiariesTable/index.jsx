import React from "react";
import Men from "../../../img/icons/Men";
import Women from "../../../img/icons/Women";
import "./styles.scss";

const TargetedBeneficiariesTable = () => {
  return (
    <div className="targetedBeneficiaries-table">
      <div className="targetedBeneficiaries-table__item">
        <div className="targetedBeneficiaries-table__amount">
          <p>549K</p>
          <p>Girls</p>
        </div>
        <div className="targetedBeneficiaries-table__icon">
          <Women color="#c7d5ef" width="50px" />
        </div>
      </div>

      <div className="targetedBeneficiaries-table__item">
        <div className="targetedBeneficiaries-table__amount">
          <p>420K</p>
          <p>Boys</p>
        </div>
        <div className="targetedBeneficiaries-table__icon">
          <Men color="#c7c8ca" width="50px" />
        </div>
      </div>

      <div className="targetedBeneficiaries-table__item">
        <div className="targetedBeneficiaries-table__amount">
          <p>2.3M</p>
          <p>Women</p>
        </div>
        <div className="targetedBeneficiaries-table__icon">
          <Women color="#4b8dca" width="60px" />
        </div>
      </div>

      <div className="targetedBeneficiaries-table__item">
        <div className="targetedBeneficiaries-table__amount">
          <p>1.6M</p>
          <p>Men</p>
        </div>
        <div className="targetedBeneficiaries-table__icon">
          <Men color="#4c4d4f" width="60px" />
        </div>
      </div>
    </div>
  );
};

export default TargetedBeneficiariesTable;
