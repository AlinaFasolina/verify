import React from "react";
import "./styles.scss";
import { newsList } from "../../consts/consts";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div className="news">
      {newsList.map((item) => (
        <NewsItem key={item.id} text={item.text} img={item.img} />
      ))}
    </div>
  );
};

export default News;
