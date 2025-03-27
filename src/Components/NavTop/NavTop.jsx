import React from "react";
import './NavTop.scss'
import Slider from "react-slick";
import { TopNavData } from "../../constants/data";

function NavTop() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };
  return (
    <div className="slider-auto-container">
      <Slider {...settings}>
        {
          TopNavData.map(({id, titles})=>{
          return  <div className="topLine" key={id}>
                    <h3>{titles}</h3>
                  </div>
          })
        }
      </Slider>
    </div>
  );
}

export default NavTop;