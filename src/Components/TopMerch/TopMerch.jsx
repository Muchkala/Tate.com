import React from 'react'
import './TopMerch.scss'
import UniShopBtn from '../UniShopBtn/UniShopBtn'
import { Container } from '@mui/material'
import Responsive from './TopMerchSlider'

export default function TopMerch() {

  return (
    <Container maxWidth='xxl' className='mainBottom'>
      <div className="mainBtmTop">
      <h2 className='MBh2'>TOP MERCH</h2>
      <div className="mainB">The Merchandise of the Resistance. Navigate across to explore the Communities Top Products.</div>
      <div className="btnMB"><UniShopBtn textBtn={'Shop Now'}/></div>
      </div>
      <Responsive/>
    </Container>
  )
}
