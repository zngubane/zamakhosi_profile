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
                <article className='contact-option'>
                    <MdOutlineEmail/>
                    <h4>Email</h4>
                    <h5>guguzama28.ngubane@gmail.com</h5>
                    <a href='mailto:guguzama28.ngubane@gmail.com' target='_blank'>Send a message</a>
                </article>
                <article className='contact-option'>
                    <BsWhatsapp/>
                    <h4>WhatsApp</h4>
                    <h5>+27670072352</h5>
                    <a href='https://api.whatsapp.com/send?phone+27670072352' target='_blank'>Send a message</a>
                </article>
            </div>
            {/*End Of Contact Option*/}
            {/* <form action=''>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type= "email" name='email' placeholder='Your Email' required/>
            </form> */}
        </div>
    </div>
  )
}
