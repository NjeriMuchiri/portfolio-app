import React from 'react'
import './Footer.css';
import '../App.css';
import Kashee from '../images/headerimg.jpg'

const Footer = () => {
  return (
    <div className='footer-part'>
        <div className='placing-items'>
            <p className='me'>Copyright &#169; Njeri Muchiri.</p>
             <img
            className='kashee-img' 
            src={Kashee} 
            alt="Njeri Muchiri" />
        </div>
    </div>
  )
}

export default Footer;