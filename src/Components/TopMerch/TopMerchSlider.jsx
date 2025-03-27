import React, { useContext } from 'react'
import Slider from "react-slick";
import './TopMerch.scss'
import { useGetAllProduct } from './../../hooks/useGetProduct';
import Loading from './../Loading/Loading';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Context } from '../../../../material-ui/src/hooks/Contexts';
import { Button } from '@mui/material';

export default function Responsive() {

  const {state, dispatch} = useContext(Context)
  

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };  
    const { products, loading } = useGetAllProduct()
  
  if (loading) {
    return <Loading />
  }

  const handleAddBasket = (data) => {
    const newBasket = state?.basket.find(element => element.id === data.id)
    console.log(state , 'state bu yeRDA')
    if(newBasket){
        alert('bunday mahsulot allaqachon mavjud')
    }else{
        dispatch({ type: 'ADD_BASKET', payload: data })
    }
  
}

  return (
        <div className="topMerchContainer">
            <Slider {...settings}>
                    {
                        products.products.map(({ id, images, price, title }) => {
                            return  <div className="box" key={id}>
                                      <div className="ImgCard">
                                          <img src={images} alt="" className='ICimg'/>
                                          <div className="topg-corner-border-frame top-left"></div>
                                          <div className="topg-corner-border-frame top-right"></div>
                                          <div className="topg-corner-border-frame bottom-left"></div>
                                          <div className="topg-corner-border-frame bottom-right"></div>
                                      </div>
                                      <h1 className='boxTitleH1'>{title.slice(0, 15)}...</h1>
                                      <h1 className='boxSpanH1'>{price}$</h1>
                                      <Button variant='outlined' onClick={()=>handleAddBasket({ id, images, price, title })}  className='addCart'><AddShoppingCartIcon/> </Button>
                                    </div>
                        })
                    }
            </Slider>
        </div>

);
}
