import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
            <div className='colz'>
                <div className='colz-icon'>

                <a href='https://www.linkedin.com/in/zamakhosi-ngubane-b464281b7/'>
                    <i className='fa fa-linkedin-square'></i>
                </a>
                </div>
            </div>
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'm <span className='highlighted-text'>Zamakhosi Ngubane</span>
                </span>
            </div>
            <div className='profie-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Software Engineering Graduate",
                            1000,
                            "Full Stack Developer",
                            1000,
                        ]}
                        />
                    </h1>
                    <span className='profile-role-tagline'>
                        A young lady with a passion for technolgy.
                    </span>
                </span>
            </div>
            <div className='profile-option'>
                <button className='btn primary-btn'>
                    {" "}
                    Hire Me{" "}
                </button>
                <a href='Resume-Zamakhosi-Ngubane.pdf' download='Zamakhosi Ngubane.pdf'>
                    <button className='highlighted-btn'>Get Resume</button>
                </a>
            </div>
         <div className='profile-details'>

        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}
