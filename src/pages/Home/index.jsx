import React, { useEffect } from "react";
import { formatDistance } from "date-fns";
import Layout from "../../components/Layout";
import News from "../../components/News";
import SliderComponent from "../../components/SliderComponent";
import "./styles.scss";
import aidLogo from "../../img/aid-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupportClusters } from "../../store/supportClustersSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSupportClusters());
  }, [dispatch]);

  const supportClusters = useSelector((state) => state.supportClusters);

  const records = supportClusters?.supportClusters?.acf?.data || [];

  const unauditedTotalsDate = supportClusters?.supportClusters?.acf?.date || [];

  const dateModified = supportClusters?.supportClusters?.modified;

  const lastUpdated = () => {
    const date = formatDistance(new Date(dateModified), new Date(), {
      addSuffix: true,
    });

    return date;
  };

  return (
    <>
      <Layout>
        <div className="homepage-wrapper">
          <div className="homepage-left">
            <div className="homepage-donations">
              <h1
                className="homepage-main-title"
                id="how-your-donations-are-helping"
              >
                How your donations are helping
              </h1>
              <p className="homepage-descrip">
                Eight months on, the situation in Ukraine remains dire.
              </p>
              <p className="homepage-descrip">
                But across the world, amazing people like you have united in
                solidarity for families whose lives are being torn apart - from
                donating millions, to calling on the government to stand with
                Ukraine’s people.
              </p>
              <p className="homepage-descrip">
                Our teams in Ukraine, provide lots of support:
              </p>

              <ul className="homepage-support-list">
                <li>Shelter</li>
                <li>Basic Needs</li>
                <li>PPE for First Responders </li>
                <li>Basic & Emergency Medical Care</li>
              </ul>
            </div>
            <div className="homepage-aid">
              <h2 className="homepage-aid-title" id="priority-support-clusters">
                <img alt="" src={aidLogo} />
                <span>PRIORITY SUPPORT CLUSTERS</span>
              </h2>
              <p className="homepage-aid-totals">
                Unaudited totals since {unauditedTotalsDate}
              </p>
              <p className="homepage-aid-updated">
                <span> updated {dateModified && lastUpdated()}</span>
              </p>
              <div className="homepage-aid-stats">
                <div className="homepage-aid-stats__left">
                  {records.length > 0 &&
                    records
                      .filter((item) => item.align === "left")
                      .map((item) => {
                        return (
                          <div className="homepage-aid-item" key={item.title}>
                            <p className="homepage-aid-amount">{item.value}</p>
                            <p className="homepage-aid-label">
                              <span>{item.title}</span>
                              <img
                                className="homepage-aid__icon"
                                src={item.icon}
                                alt=""
                              />
                            </p>
                          </div>
                        );
                      })}
                </div>
                <div className="homepage-aid-stats__right">
                  {records.length > 0 &&
                    records
                      .filter((item) => item.align === "right" && !item.inner)
                      .map((item) => {
                        return (
                          <div className="homepage-aid-item" key={item.title}>
                            <p className="homepage-aid-amount">{item.value}</p>
                            <p className="homepage-aid-label">
                              <span>{item.title}</span>
                              <img
                                className="homepage-aid__icon"
                                src={item.icon}
                                alt=""
                              />
                            </p>
                          </div>
                        );
                      })}
                  <div className="homepage-aid-inner homepage-aid-item">
                    {records.length > 0 &&
                      records
                        .filter((item) => item.align === "right" && item.inner)
                        .map((item) => {
                          return (
                            <div key={item.title}>
                              <p className="homepage-aid-amount">
                                {item.value}
                              </p>
                              <p className="homepage-aid-label">
                                <span>{item.title}</span>
                                <img
                                  className="homepage-aid__icon"
                                  src={item.icon}
                                  alt=""
                                />
                              </p>
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="homepage-right">
            <div className="homepage-slider">
              <SliderComponent />
            </div>
            <News />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
