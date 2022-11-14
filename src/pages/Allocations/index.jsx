import React from "react";
import Achievements from "../../components/Achievements";
import AllocatedByLocation from "../../components/AllocatedByLocation";
import AllocatedByPartnerType from "../../components/AllocatedByPartnerType";
import ClusterAllocations from "../../components/ClusterAllocations";
import DonorCountries from "../../components/DonorCountries";
import Layout from "../../components/Layout";
import TargetedBeneficiaries from "../../components/TargetedBeneficiaries";
import UkraineMap from "../../components/UkraineMap";
import UkraineMapHistory from "../../components/UkraineMap/UkraineMapHistory";
import { regionsColors } from "../../consts/consts";
import "./styles.scss";

const Allocations = () => {
  return (
    <Layout>
      <div className="allocations-top">
        <TargetedBeneficiaries />
        <AllocatedByLocation />
        <ClusterAllocations />
      </div>
      <div className="allocations-map">
        <UkraineMap {...regionsColors} />
      </div>
      <div className="allocations-bottom">
        <AllocatedByPartnerType />
        <Achievements />
        <div className="allocations-history">
          <UkraineMapHistory />
          <div className="allocations-donor-contrib">
            <DonorCountries size="sm" hasHistory />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Allocations;
