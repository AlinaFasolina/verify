import React, { useEffect } from "react";
import TargetedBeneficiariesChart from "../charts/donutCharts/TargetedBeneficiariesChart";
import "./styles.scss";
import TargetedBeneficiariesTable from "./TargetedBeneficiariesTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchTargetedBeneficiariesData } from "../../store/targetedBeneficiariesSlice";
import { useState } from "react";

const TargetedBeneficiaries = () => {
  const targetedBeneficiaries = useSelector(
    (state) => state.targetedBeneficiaries
  );

  const records =
    targetedBeneficiaries?.targetedBeneficiaries[0]?.acf?.data[0] || null;

  const totalAmount =
    records &&
    Object.values(records)
      .map((item) => Number(item))
      .reduce((prev, current) => prev + current);

  const womenPercent =
    records && Math.round((Number(records.women) * 100) / totalAmount);

  const girlsPercent =
    records && Math.round((Number(records.girls) * 100) / totalAmount);

  const boysPercent =
    records && Math.round((Number(records.boys) * 100) / totalAmount);

  const menPercent =
    records && Math.round((Number(records.men) * 100) / totalAmount);

  const girlsAmountFormatted = records && records.girls / 1000;
  const boysAmountFormatted = records && records.boys / 1000;
  const womenAmountFormatted = records && records.women / 1000000;
  const menAmountFormatted = records && records.men / 1000000;

  const totalAmountFormatted = (totalAmount / 1000000).toFixed(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTargetedBeneficiariesData());
  }, [dispatch]);

  return (
    <div className="targetedBeneficiaries">
      <h2 className="targetedBeneficiaries-title" id="targeted-beneficiaries">
        targeted beneficiaries
      </h2>
      {records && (
        <div className="targetedBeneficiaries-content">
          <TargetedBeneficiariesTable
            women={womenAmountFormatted}
            girls={girlsAmountFormatted}
            boys={boysAmountFormatted}
            men={menAmountFormatted}
          />
          <div className="targetedBeneficiaries-donut">
            <TargetedBeneficiariesChart
              women={womenPercent}
              girls={girlsPercent}
              boys={boysPercent}
              men={menPercent}
              total={totalAmountFormatted}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TargetedBeneficiaries;
