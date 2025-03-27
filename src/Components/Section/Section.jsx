import React from 'react'
import './Section.scss'
import { Container, Grid2 } from '@mui/material'
import CenteredCarousel from './CenteredCarousel'
import SectionTopLine from '../SectionTopLine/SectionTopLine'
import SectionMiddle from '../SectionMiddle/SectionMiddle'
import SectionBottom from '../SectionBottom/SectionBottom'
import EscapeCall from '../EscapeCall/EscapeCall'


export default function Section() {
  return (
    <section className='sectionFirst'>
    <Container maxWidth='xxl' sx={{textAlign:'center'}}>
            <p className=''>HIGH PERFORMANCE ANDREW TATE MERCHANDISE</p>
            <h2 className='MBh2'>CHOOSE A CATEGORY</h2>
        <Grid2 container sx={{alignItems:'center', justifyContent:'center'}} spacing={0}>
          <Grid2 size={{md:7}}>
            <CenteredCarousel/>
          </Grid2>
        </Grid2>
    </Container>
   <SectionTopLine/>
   <SectionMiddle/>
   <SectionBottom/>
   <EscapeCall/>
    </section>
  )
}
