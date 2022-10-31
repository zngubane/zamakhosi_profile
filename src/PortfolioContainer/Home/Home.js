import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import About from './About/About'
import './Home.css'


export default function Home() {
  return (
    <div className='home-container'>
          <Profile />
          <Footer />
          <About/>
      
      </div>
      
  )
}
