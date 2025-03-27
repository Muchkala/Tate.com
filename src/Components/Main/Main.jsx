import { Container} from '@mui/material'
import Grid from '@mui/material/Grid2';
import './Main.scss'
import React from 'react'
import SimpleSlider from '../HomeCarousel/HomeCarousel'
import TopMerch from '../TopMerch/TopMerch';

export default function Main() {
  return (
    <main>
        <Container maxWidth='xxl' >
            <Grid container sx={{justifyContent:'space-between' , alignItems:'center'}} spacing={0}>
                <Grid size={{xs:12}}>
                    <SimpleSlider/>
                </Grid>
            </Grid>
        </Container>
        <TopMerch/>
    </main>
  )
}
