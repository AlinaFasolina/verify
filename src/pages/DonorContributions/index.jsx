import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import "./styles.scss";
import DisabilitiesDonutChart from "../../components/charts/donutCharts/DisabilitiesDonutChart";
import WomanDonutChart from "../../components/charts/donutCharts/WomanDonutChart";
import flag from "../../img/slider-images/ua-flag.png";
import refugees from "../../img/slider-images/refugees.png";
import EducationDonutChart from "../../components/charts/donutCharts/EducationDonutChart";
import Timeline from "../../components/Timeline";
import DonorCountries from "../../components/DonorCountries";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimelineData } from "../../store/timelineSlice";

const DonorContributions = () => {
  const timeline = useSelector((state) => state.timeline);

  const records = timeline?.timelineList?.acf?.data || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTimelineData());
  }, [dispatch]);

  return (
    <Layout>
      <div className="donorContrib">
        <div className="donorContrib-left donorContrib-block">
          <div className="donorContrib-donorCountries">
            <DonorCountries />
          </div>
        </div>

        <div className="donorContrib-center donorContrib-block">
          <img className="donorContrib-center__top-img" src={flag} />
          <h3 className="donorContrib-subtitle">Priority areas</h3>
          <div className="donorContrib-sections-names">
            <p>Women and Girls</p>
            <p>People with Disabilities</p>
            <p>Education in Protracted Crisis</p>
          </div>

          <div className="donorContrib-donuts">
            <div className="donorContrib-donuts__top">
              <div className="donut-women__and__girls">
                <WomanDonutChart />
              </div>
              <div className="donut-disabilities">
                <DisabilitiesDonutChart />
              </div>
              <div className="donut-education">
                <EducationDonutChart />
              </div>
            </div>
          </div>
          <img className="donorContrib-center__bottom-img" src={refugees} />
        </div>

        <div className="donorContrib-right donorContrib-block">
          <div className="donorContrib-timeline">
            <h2 className="donorContrib-title">TIMELINE</h2>
            {records.length > 0 && <Timeline timelineList={records} />}
            <p className="donorContrib-timeline__allocations">
              Allocations in US$
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonorContributions;
