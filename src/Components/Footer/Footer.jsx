import { Container, Grid2 } from '@mui/material'
import React from 'react'
import './Footer.scss'
import { FooterData } from '../../constants/data'
import { Instagram, Twitter } from '@mui/icons-material'

export default function Footer() {
  return (
    <footer>
        <Container maxWidth={'xl'} style={{background: 'white', color:'black'}}>
            <Grid2 container spacing={1}>
                {
                    FooterData.map(({id, title, li1, li2, li3})=> {
            return  <Grid2 size={2.4} key={id} className="Fbox">
                        <h2 className='Ftitle'>{title}</h2>
                        <ul>
                            <li>{li1}</li>
                            <li>{li2}</li>
                            <li>{li3}</li>
                        </ul>
                    </Grid2>
                    })
                }
                <Grid2 size={2.4}>
                    <h2>Follow Us On</h2>
                    <Twitter style={{color:'black'}}/>
                    <Instagram/>
                </Grid2>

            </Grid2>
        </Container>
    </footer>
  )
}
