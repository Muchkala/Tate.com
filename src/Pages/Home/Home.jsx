import React from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../../Components/Main/Main';
import NavTop from '../../Components/NavTop/NavTop';
import Section from '../../Components/Section/Section';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <div className='homePage'>
      <NavTop />
      <Navbar/>
      <Main/>
      <Section/>
      <Footer/>
    </div>
  )
}
