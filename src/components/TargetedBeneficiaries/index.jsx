import React, { useEffect } from "react";
import TargetedBeneficiariesChart from "../charts/donutCharts/TargetedBeneficiariesChart";
import "./styles.scss";
import TargetedBeneficiariesTable from "./TargetedBeneficiariesTable";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTargetedBeneficiariesData,
  fetchTargetedBeneficiariesTotalData,
} from "../../store/targetedBeneficiariesSlice";
import { useState } from "react";

const TargetedBeneficiaries = () => {
  const [valuesList, setValuesList] = useState([]);
  const [percentsList, setPercentsList] = useState([]);
  const [total, setTotal] = useState(null);
  const targetedBeneficiaries = useSelector(
    (state) => state.targetedBeneficiaries
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTargetedBeneficiariesData());
    dispatch(fetchTargetedBeneficiariesTotalData());
  }, [dispatch]);

  useEffect(() => {
    if (targetedBeneficiaries.targetedBeneficiariesList) {
      let valuesList = targetedBeneficiaries.targetedBeneficiariesList.map(
        (item) => item.acf["allocation-value"]
      );
      setValuesList(valuesList);
      let percentsList = targetedBeneficiaries.targetedBeneficiariesList.map(
        (item) => item.acf["allocation-percentage"]
      );
      setPercentsList(percentsList);
    }

    if (targetedBeneficiaries.targetedBeneficiariesTotal) {
      let total = targetedBeneficiaries.targetedBeneficiariesTotal[0].acf.total;
      setTotal(total);
    }
  }, [targetedBeneficiaries]);

  return (
    <div className="targetedBeneficiaries">
      <h2 className="targetedBeneficiaries-title" id="targeted-beneficiaries">
        targeted beneficiaries
      </h2>
      <div className="targetedBeneficiaries-content">
        {valuesList && <TargetedBeneficiariesTable valuesList={valuesList} />}
        <div className="targetedBeneficiaries-donut">
          {percentsList.length > 0 && (
            <TargetedBeneficiariesChart
              percentsList={percentsList}
              total={total}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TargetedBeneficiaries;
