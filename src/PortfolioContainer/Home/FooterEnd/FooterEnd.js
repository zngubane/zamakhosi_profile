import React from 'react'
import './FooterEnd.css'

export default function Footer1() {
    const footerYear = new Date().getFullYear()
  return (
    <div className='footer-end-container'>
      <div className='footer-text'>
      <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </div>
  )
}
