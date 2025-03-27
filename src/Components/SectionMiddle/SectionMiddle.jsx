import { Container, Grid2 } from '@mui/material'
import React from 'react'
import './SectionMiddle.scss'
import TopIMG from '../../assets/Img/SectionMTopIMG.svg'
import UniShopBtn from '../UniShopBtn/UniShopBtn'
import GradeSharpIcon from '@mui/icons-material/GradeSharp';

export default function SectionMiddle() {
  return (
    <div className='sectionMiddle'>
        <img src={TopIMG} alt="" style={{margin:'0px auto', display:'block'}}/>
        <Container maxWidth='xxl' sx={{mt:'20px'}}>
            <Grid2 container sx={{justifyContent:'space-between' , alignItems:'end', }} spacing={0}>
                <Grid2 size={{md:6 }} boxShadow={0} paddingBottom={30} className='caruselCols'>
                <h2>Fireblood</h2>
                <p>The one ultimate supplement to ignite your life.</p>
                <UniShopBtn textBtn={'LEARN MORE'}/>
                </Grid2>
                <Grid2 size={{md:6}} boxShadow={0} className='caruselCols mainRightCol'>
                    <div className="mainLogoBox">
                    <div className="starShadows">
                    {[...Array(5)].map((_, index) => (
                        <GradeSharpIcon key={index} className="glowing-star" />
                    ))}
                    </div>
                    <p className='rghtMianP'>Tastes terrible.Feel Great.</p>
                    </div>
                </Grid2>
            </Grid2>
        </Container>
    </div>
  )
}
