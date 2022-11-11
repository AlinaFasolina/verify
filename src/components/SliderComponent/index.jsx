import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import img1 from "../../img/slider-images/img1.jpg";
import img3 from "../../img/slider-images/img3.jpg";
import img4 from "../../img/slider-images/img4.jpg";
import "./styles.scss";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slider-item">
          <img src={img1} />
        </div>
        <div className="slider-item">
          <img src={img3} />
        </div>
        <div className="slider-item">
          <img src={img4} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
