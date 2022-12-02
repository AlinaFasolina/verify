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
import { fetchPriorityAreasList } from "../../store/priorityAreasSlice";

const DonorContributions = () => {
  const timeline = useSelector((state) => state.timeline);

  const timelineRecords = timeline?.timelineList?.acf?.data || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTimelineData());
    dispatch(fetchPriorityAreasList());
  }, [dispatch]);

  const priorityAreas = useSelector((state) => state.priorityAreas);

  const priorityAreasRecords = priorityAreas?.priorityAreasList?.acf || [];

  return (
    <Layout>
      <div className="donorContrib">
        <div className="donorContrib-left donorContrib-block">
          <div className="donorContrib-donorCountries">
            <DonorCountries />
          </div>
        </div>

        <div className="donorContrib-center donorContrib-block">
          <img alt="" className="donorContrib-center__top-img" src={flag} />
          <h3 className="donorContrib-subtitle" id="priority-areas">
            Priority areas
          </h3>
          <div className="donorContrib-sections-names">
            <p>Women and Girls</p>
            <p>People with Disabilities</p>
            <p>Education in Protracted Crisis</p>
          </div>

          <div className="donorContrib-donuts">
            <div className="donorContrib-donuts__top">
              <div className="donut-women__and__girls">
                {priorityAreasRecords &&
                  priorityAreasRecords["general-graph"] && (
                    <WomanDonutChart
                      girls={
                        priorityAreasRecords["general-graph"][0].girls || null
                      }
                      women={
                        priorityAreasRecords["general-graph"][0].women || null
                      }
                    />
                  )}
              </div>
              <div className="donut-disabilities">
                {priorityAreasRecords &&
                  priorityAreasRecords["disabilities-graph"] && (
                    <DisabilitiesDonutChart
                      girls={
                        priorityAreasRecords["disabilities-graph"][0].girls ||
                        null
                      }
                      women={
                        priorityAreasRecords["disabilities-graph"][0].women ||
                        null
                      }
                      boys={
                        priorityAreasRecords["disabilities-graph"][0].boys ||
                        null
                      }
                      men={
                        priorityAreasRecords["disabilities-graph"][0].men ||
                        null
                      }
                    />
                  )}
              </div>
              <div className="donut-education">
                {priorityAreasRecords &&
                  priorityAreasRecords["education-graph"] && (
                    <EducationDonutChart
                      girls={
                        priorityAreasRecords["education-graph"][0].girls || null
                      }
                      women={
                        priorityAreasRecords["education-graph"][0].women || null
                      }
                      boys={
                        priorityAreasRecords["education-graph"][0].boys || null
                      }
                      men={
                        priorityAreasRecords["education-graph"][0].men || null
                      }
                    />
                  )}
              </div>
            </div>
          </div>
          <img
            alt=""
            className="donorContrib-center__bottom-img"
            src={refugees}
          />
        </div>

        <div className="donorContrib-right donorContrib-block">
          <div className="donorContrib-timeline">
            <h2 className="donorContrib-title" id="timeline">
              TIMELINE
            </h2>
            {timelineRecords.length > 0 && (
              <Timeline timelineList={timelineRecords} />
            )}
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
