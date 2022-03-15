import React from 'react';
import '../Components/Contact.css';
import Footer from '../Components/Footer';
const Contact = () => {
  return (
    <>
    <div className='contact-banner'>
      <article className='contact-info'>
         <form className='message-form'>
           <p className='info-cont'>Leave a Message</p>
               <input type="text" name="name" placeholder='Name'/>
               <input type="email" name="email" placeholder='Your Email' />
               <input type="textarea" name="message" placeholder='Message'/>
             <input type="submit" value="submit" />
         </form>

      </article>
    </div>
    <Footer/>
      
    </>
  )
}

export default Contact