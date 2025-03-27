import React from 'react'
import './TopMerch.scss'
import UniShopBtn from '../UniShopBtn/UniShopBtn'
import { Container } from '@mui/material'

export default function ChooseCategory() {

  return (
    <Container maxWidth='xxl' className='mainBottom'>
        <div className="mainBtmTop">
        <h2 className='MBh2'>TOP MERCH</h2>
        <div className="btnMB"><UniShopBtn textBtn={'Shop Now'}/></div>
        </div>
    </Container>
  )
}
