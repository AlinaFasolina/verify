import React from "react";
import Layout from "../../components/Layout";
import "./styles.scss";
import DisabilitiesDonutChart from "../../components/charts/donutCharts/DisabilitiesDonutChart";
import WomanDonutChart from "../../components/charts/donutCharts/WomanDonutChart";
import flag from "../../img/slider-images/ua-flag.png";
import EducationDonutChart from "../../components/charts/donutCharts/EducationDonutChart";
import Timeline from "../../components/Timeline";
import DonorCountries from "../../components/DonorCountries";

const DonorContributions = () => {
  return (
    <Layout>
      <div className="donorContrib">
        <div className="donorContrib-left donorContrib-block">
          <DonorCountries />
        </div>

        <div className="donorContrib-center donorContrib-block">
          <img className="donorContrib-center__top-img" src={flag} />
          <h3 className="donorContrib-subtitle">Priority areas</h3>
          <div className="donorContrib-sections-names">
            <p>Women and Girls</p>
            <p>People with Disabilities</p>
          </div>

          <div className="donorContrib-donuts">
            <div className="donorContrib-donuts__top">
              <div className="donut-women__and__girls">
                <WomanDonutChart />
              </div>
              <div className="donut-disabilities">
                <DisabilitiesDonutChart />
              </div>
            </div>
            <div className="donorContrib-donuts__bottom">
              <p className="donut-education__title">
                Education in Protracted Crisis
              </p>
              <div className="donut-education">
                <EducationDonutChart />
              </div>
            </div>
          </div>
        </div>

        <div className="donorContrib-right donorContrib-block">
          <h2 className="donorContrib-title">TIMELINE</h2>
          <Timeline />
          <p className="donorContrib-timeline__allocations">
            Allocations in US$
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DonorContributions;
