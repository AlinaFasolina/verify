import React from "react";
import "./styles.scss";
import IconInfo from "../IconInfo";
import partnership from "../../img/icons/partnership.svg";
import AllocationsByPartnerTypeChart from "../charts/donutCharts/AllocationsPartnerTypeChart";

const AllocatedByPartnerType = () => {
  return (
    <div className="allocatedByPartnerType">
      <h2 className="allocatedByPartnerType-title">
        Allocated by partner type
      </h2>

      <IconInfo title="Partners" icon={partnership} value="38" size="sm" />
      <div className="allocationsByPartnerType-donut">
        <AllocationsByPartnerTypeChart />
      </div>
    </div>
  );
};

export default AllocatedByPartnerType;
