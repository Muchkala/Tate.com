import { Container} from '@mui/material'
import Grid2 from '@mui/material/Grid2';
import './Main.scss'
import React from 'react'
import SimpleSlider from '../HomeCarousel/HomeCarousel'
import TopMerch from '../TopMerch/TopMerch';

export default function Main() {
  return (
    <main>
        <Container maxWidth='xxl' >
            <Grid2 container sx={{justifyContent:'space-between' , alignItems:'center'}} spacing={0}>
                <Grid2 size={{xs:12}}>
                    <SimpleSlider/>
                </Grid2>
            </Grid2>
        </Container>
        <TopMerch/>
    </main>
  )
}
