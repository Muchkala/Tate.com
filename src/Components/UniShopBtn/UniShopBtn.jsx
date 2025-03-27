import React from 'react'
import './UniShopBtn.scss'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function UniShopBtn({textBtn}) {
  return (
    <button onClick={()=>alert(`Iltimos , YOSH BOLAga o'xshab har narsani bosavermang`)} className='crsBtn'>{textBtn}<MoreVertOutlinedIcon fontSize='small' sx={{background:'none', fill:'black', width:'20px'}}/>
    <DoubleArrowIcon fontSize='large' sx={{background:'none', fill:'black'}}/></button>
  )
}
