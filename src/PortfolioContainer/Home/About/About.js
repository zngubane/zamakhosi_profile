import React from 'react'
import './About.css'
import me from '../../../assets/Home/me.JPG'
import AboutMeText from './AboutMeText'

export default function About() {
  return (
    <div className='about-container'>
        <h1 className="about-heading">
          About Me
        </h1>
        <div className='about-me-img'>
            <img src={me} alt="My image" />
            <div className='about-me-container'>
                <AboutMeText/>
            </div>
        </div>
    </div>
  )
}
