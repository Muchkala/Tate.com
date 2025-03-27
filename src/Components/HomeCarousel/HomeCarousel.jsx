import React from 'react'
import Slider from 'react-slick';
import './HomeCarousel.scss'
import { Container, Grid2 } from '@mui/material';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import logoRight from '../../assets/Img/topg.png'
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import { MainCarusel } from '../../constants/data';
import UniShopBtn from '../UniShopBtn/UniShopBtn';
function SimpleSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <ArrowForwardIosOutlined/>,  // 🔹 Custom next button
    prevArrow: <ArrowBackIosOutlined/>,  // 🔹 Custom prev button

  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          MainCarusel.map(({id, title, desc, btn, image, right})=> {
            return <Container key={id} maxWidth='xxl' className='mainContainer'>
                    <img src={image} alt="" className='BgImgMain'/>
                    <Grid2 container sx={{ justifyContent: "space-between", alignItems: "center" }} spacing={0}>
                      <Grid2 size={{md:6}} className='caruselCols'>
                      <h2>{title}</h2>
                      <p>{desc}</p>
                      <UniShopBtn textBtn={btn}/>
                      </Grid2>
                      <Grid2 size={{md:6}} className='caruselCols mainRightCol'>
                        <img src={logoRight} alt="" />
                        <div className="mainLogoBox">
                          <div className="starShadows">
                          {[...Array(5)].map((_, index) => (
                            <GradeSharpIcon key={index} className="glowing-star" />
                          ))}
                          </div>
                        <p className='rghtMianP'>{right} <strong>+100,000 </strong>men of distinction</p>
                        </div>
                      </Grid2>
                    </Grid2>
                  </Container>
          })
        }
      </Slider>
    </div>
  );
}

export default SimpleSlider;

