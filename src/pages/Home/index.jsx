import React, { useEffect } from "react";
import { formatDistance } from "date-fns";
import Layout from "../../components/Layout";
import News from "../../components/News";
import SliderComponent from "../../components/SliderComponent";
import "./styles.scss";
import aidLogo from "../../img/aid-logo.png";
import dollarCoin from "../../img/icons/dollar-coin.svg";
import pill from "../../img/icons/pill.svg";
import cube from "../../img/icons/cube.svg";
import weight from "../../img/icons/weight.svg";
import medicalCross from "../../img/icons/medical-cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupportClusters } from "../../store/supportClustersSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSupportClusters());
  }, [dispatch]);

  const supportClusters = useSelector((state) => state.supportClusters);

  const records = supportClusters?.supportClusters?.acf?.data || [];

  const dateModified = supportClusters?.supportClusters?.modified;

  const getIcon = (icon) => {
    if (icon === "dollarCoin") {
      return dollarCoin;
    } else if (icon === "weight") {
      return weight;
    } else if (icon === "pill") {
      return pill;
    } else if (icon === "cube") {
      return cube;
    } else if (icon === "medicalCross") {
      return medicalCross;
    }
  };

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
              <h1 className="homepage-main-title">
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
              <h2 className="homepage-aid-title">
                <img src={aidLogo} /> <span>PRIORITY SUPPORT CLUSTERS</span>
              </h2>
              <p className="homepage-aid-totals">
                Unaudited totals since Jan. 1, 2022
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
                                src={getIcon(item.icon)}
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
                                src={getIcon(item.icon)}
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
                                  src={getIcon(item.icon)}
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
