import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import About from './About/About'
import './Home.css'
import Contact from './Contact/Contact'
import FooterEnd from './FooterEnd/FooterEnd'


export default function Home() {
  return (
    <div className='home-container'>
          <Profile />
          <Footer />
          <About/>
          <Footer />
          <Contact />
          <FooterEnd />
      </div>
      
  )
}
