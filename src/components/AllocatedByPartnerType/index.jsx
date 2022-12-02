import React from "react";
import "./styles.scss";
import IconInfo from "../IconInfo";
import partnership from "../../img/icons/partnership.svg";
import AllocationsByPartnerTypeChart from "../charts/donutCharts/AllocationsPartnerTypeChart";
import { fetchAllocatedByPartnerType } from "../../store/allocatedByPartnerTypeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AllocatedByPartnerType = () => {
  const allocatedByPartnerType = useSelector(
    (state) => state.allocatedByPartnerType
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllocatedByPartnerType());
  }, [dispatch]);

  const total =
    allocatedByPartnerType?.allocatedByPartnerTypeList?.acf?.total || [];

  const records =
    allocatedByPartnerType?.allocatedByPartnerTypeList?.acf?.data || [];

  return (
    <div className="allocatedByPartnerType">
      <h2 className="allocatedByPartnerType-title" id="allocated-partner-type">
        Allocated by partner type
      </h2>

      {total && (
        <IconInfo name="Partners" icon={partnership} value={total} size="sm" />
      )}
      <div className="allocationsByPartnerType-donut">
        {records && <AllocationsByPartnerTypeChart records={records} />}
      </div>
    </div>
  );
};

export default AllocatedByPartnerType;
