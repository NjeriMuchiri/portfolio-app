import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Components/Contact.css';
import {motion} from "framer-motion/dist/framer-motion.dev";

function Contact(){
  return (
    <>
    <motion.div className='contact-banner'
        
       initial = {{width: 0}}
       animate = {{width: "100%"}}
       exit = {{x: window.innerWidth, transition:{duration: 0.1}}}

    >
      <article className='contact-info'>
         <form className='message-form'>
           <p className='info-cont'>Leave a Message<FontAwesomeIcon icon={faCommentDots}style={{color:'#9bddff',marginLeft:5,fontSize:20}}/></p>
               <input type="text" name="name" placeholder='Name'/>
               <input type="email" name="email" placeholder='Your Email' />
               <input type="textarea" name="message" placeholder='Message'/>
             <input type="submit" value="submit" />
         </form>

      </article>
    </motion.div>
      
    </>
  )
}

export default Contact