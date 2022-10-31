import React from 'react'
import './About.css'
import me from '../../../assets/Home/me.JPG'
import About_Me_Text from './About_me_text'

export default function About() {
  return (
    <div className='about-container'>
      
        <h1 className="has-text-centered has-text-weight-bold is-size-1">
          About Me
        </h1>
        <div className='about-me-img'>
            <img src={me} alt="My image" />
            <div className='about-me-container'>
                <About_Me_Text/>
            </div>
        </div>
      
    </div>
  )
}
