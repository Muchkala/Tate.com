import React, { Component } from "react";
import './Section.scss'
import Slider from "react-slick";

import { SectionBoxData } from "../../constants/data";

function CenteredCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    arrows:false,
    centerPadding: "0px",
    slidesToShow: 2.3,
    speed: 1000
  };
  return (
      <Slider {...settings}>
        {
            SectionBoxData.map(({id, title, desc,img, className})=> {
                return  <div className="sectionBox" key={id}>
                            <div className="ImgCard">
                                <img src={img} alt="" className='ICimg'/>
                                <div className={`${className} top-left`}></div>
                                <div className={`${className} top-right`}></div>
                                <div className={`${className} bottom-left`}></div>
                                <div className={`${className} bottom-right`}></div>
                            </div>
                            <h1 className='CCh1'>{title}</h1>
                            <p className="CCtxt">{desc}</p>
                        </div>
            })
        }
      </Slider>
  );
}

export default CenteredCarousel;
