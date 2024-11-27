import React from 'react'
import RightSide from '../assets/rightside.jpg'
import LeftSide from '../assets/leftside.jpg'
import '../style/contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${LeftSide})`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id='contactForm' method="POST">
            <label htmlFor='name'>Full Name</label>
            <input name="name" placeholder='Enter Full Name' type='text'/>
            <label htmlFor='email'>Email</label>
            <input name="email" placeholder='Enter Your Email' type='email'/>
            <label htmlFor='message'>Message</label>
            <textarea rows="6" placeholder='Enter Your Message' name='Message' required></textarea>
            <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
