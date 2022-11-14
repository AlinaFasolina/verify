import React from "react";
import "./styles.scss";

const UkraineMapHistory = () => {
  return (
    <div className="history-wrapper">
      <div className="history-top">
        <p className="history-title">Budget in oblasts</p>
        <div className="history-circles__wrapper">
          <div className="history-circles"></div>
          <div className="history-circles__labels">
            <p className="history-circles__label-item">{`> 7M`}</p>
            <p className="history-circles__label-item">1M - 7M</p>
            <p className="history-circles__label-item">{`< 1M`}</p>
          </div>
        </div>
      </div>
      <div className="history-bottom">
        <p className="history-title">People targeted in oblast</p>
        <div className="history-targeted">
          <div className="history-targeted__left">
            <div className="history-targeted__item">
              <div className="history-targeted__label history-targeted__label_sm"></div>
              <p>{`< 30K`}</p>
            </div>
            <div className="history-targeted__item">
              <div className="history-targeted__label history-targeted__label_lg"></div>
              <p>100K - 500K</p>
            </div>
          </div>
          <div className="history-targeted__right">
            <div className="history-targeted__item">
              <div className="history-targeted__label history-targeted__label_md"></div>
              <p>30K - 500K</p>
            </div>
            <div className="history-targeted__item">
              <div className="history-targeted__label history-targeted__label_xl"></div>
              <p>{`> 500K`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UkraineMapHistory;
