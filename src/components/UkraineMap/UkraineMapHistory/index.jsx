import React from "react";
import "./styles.scss";

const UkraineMapHistory = () => {
  return (
    <div className="history-wrapper">
      <div>
        <p className="history-title">Budget in oblasts</p>
      </div>
      <div>
        <p className="history-title">People targeted in oblast</p>
        <div className="history-targeted">
          <div className="history-targeted__left">
            <div>
              <div className="history-targeted__label history-targeted__label_sm"></div>
              <p>{`<30K`}</p>
            </div>
            <div>
              <div className="history-targeted__label history-targeted__label_lg"></div>
              <p>100K-500K</p>
            </div>
          </div>
          <div className="history-targeted__right">
            <div>
              <div className="history-targeted__label history-targeted__label_md"></div>
              <p>30K-500K</p>
            </div>
            <div>
              <div className="history-targeted__label history-targeted__label_xl"></div>
              <p>{`>500K`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UkraineMapHistory;
