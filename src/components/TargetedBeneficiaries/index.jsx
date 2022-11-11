import React from "react";
import TargetedBeneficiariesChart from "../charts/donutCharts/TargetedBeneficiariesChart";
import "./styles.scss";
import TargetedBeneficiariesTable from "./TargetedBeneficiariesTable";

const TargetedBeneficiaries = () => {
  return (
    <div className="targetedBeneficiaries">
      <h2 className="targetedBeneficiaries-title">targeted beneficiaries</h2>
      <div className="targetedBeneficiaries-content">
        <TargetedBeneficiariesTable />
        <div className="targetedBeneficiaries-donut">
          <TargetedBeneficiariesChart />
        </div>
      </div>
    </div>
  );
};

export default TargetedBeneficiaries;
