import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import img1 from "../../img/slider-images/image1_sml.png";
import img2 from "../../img/slider-images/image2_sml.png";
import img3 from "../../img/slider-images/image3_sml.png";
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
          <img src={img2} />
        </div>
        <div className="slider-item">
          <img src={img3} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
