import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

export default function Contact() {
  return (
    <div className='contact-container'>
        <h1 className='contact-heading'>
            Contact Me
        </h1>
        <div className='container-contact-container'>
            < div className='contact-options'>
                <div className='contact-option'>
                    <MdOutlineEmail className='contact-option-icon'/>
                    <h4>Email</h4>
                    <h5>guguzama28.ngubane@gmail.com</h5>
                    <a href='mailto:guguzama28.ngubane@gmail.com' target='_blank'>Send a message</a>
                </div>
                <div className='contact-option'>
                    <BsWhatsapp className='contact-option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+27670072352</h5>
                    <a href='https://web.whatsapp.com/send?phone+27670072352' target='_blank'>Send a message</a>
                </div>
            </div>
            {/*End Of Contact Option*/}
            <form action=''>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type= "email" name='email' placeholder='Your Email' required/>
                <textarea name='message' rows='7' placeholder='Your Message' required/>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </div>
  )
}
