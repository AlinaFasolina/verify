import React from "react";
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

const Home = () => {
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
                <span> updated 5 am today</span>
              </p>
              <div className="homepage-aid-stats">
                <div className="homepage-aid-stats__left">
                  <div className="homepage-aid-item">
                    <p className="homepage-aid-amount">$1,463,822,168</p>
                    <p className="homepage-aid-label">
                      <span> in medical aid</span>
                      <img className="homepage-aid__icon" src={dollarCoin} />
                    </p>
                  </div>
                  <div className="homepage-aid-item">
                    <p className="homepage-aid-amount">10,370,307</p>
                    <p className="homepage-aid-label">
                      <span> pounds of medicine and supplies</span>
                      <img className="homepage-aid__icon" src={weight} />
                    </p>
                  </div>
                </div>
                <div className="homepage-aid-stats__right">
                  <div className="homepage-aid-item">
                    <p className="homepage-aid-amount">479,492,254</p>
                    <p className="homepage-aid-label">
                      <span>doses of medicine</span>
                      <img className="homepage-aid__icon" src={pill} />
                    </p>
                  </div>
                  <div className="homepage-aid-inner homepage-aid-item">
                    <div>
                      <p className="homepage-aid-amount">16,260</p>
                      <p className="homepage-aid-label">
                        <span>deliveries</span>
                        <img className="homepage-aid__icon" src={cube} />
                      </p>
                    </div>
                    <div>
                      <p className="homepage-aid-amount">2,160</p>
                      <p className="homepage-aid-label">
                        <span> healthcare providers supported</span>
                        <img
                          className="homepage-aid__icon homepage-aid__icon-cross"
                          src={medicalCross}
                        />
                      </p>
                    </div>
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
