import React from "react";
import "./styles.scss";

const NewsItem = ({ text, img }) => {
  return (
    <div className="news-item">
      <img className="news-item__img" src={img} />
      <p className="news-item__text">{text}</p>
    </div>
  );
};

export default NewsItem;
