import { Container, Grid2 } from '@mui/material'
import React from 'react'
import './EscapeCall.scss'

export default function EscapeCall() {
  return (
    <Container className='escapeCall'>
        <Grid2 container spacing={0} sx={{justifyContent:'center', textAlign:'center'}}>
            <Grid2 size={{md:6}} sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <h5 className='ECh5'>Escape</h5>
                <h1 className='ECh1'>The Matrix</h1>
                <p className='ECtxt'>And keep yourself in the know with the latest news and updates from TopG.</p>
                <div className="hex-input-container">
                    <input type="email" placeholder="YOUR EMAIL ADDRESS" className="hex-input" />
                    <button type='submit' className="hex-button">JOIN</button>
                </div>
                <p className='ECtxt'>By signing up you agree to your <span>Terms & Conditions</span></p>
            </Grid2>
        </Grid2>
    </Container>
  )
}
