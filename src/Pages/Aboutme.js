import React from 'react';
import Kashee from '../images/aboutme.jpg';
import '../Components/Aboutme.css';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from "framer-motion/dist/framer-motion.dev";

function Aboutme() {
  return (
    <motion.div className='aboutme-section'

       initial = {{width: 0}}
       animate = {{width: "100%"}}
       exit = {{x: window.innerWidth, transition:{duration: 0.1 }}}
    
    >
       <article className='info-section'>
       <img 
       src={Kashee}  
       alt="NjeriMuchiri"  />
       <p className='kashee-info'>
         Hi,my name is NjeriMuchiri and I am a <span className='abt-kash'>WebsiteDeveloper, WebsiteDesigner and an SEO practitioner</span>. I have been in this creative space for a while now and I am well familiar and experienced with everything that goes around in the process of developing great products that will have best user experience and one that will be ranked high by the Search Engines. I look forward to working with and for anyone who would like to work with me. Check out my contact page for the contact info and let's connect. See you soon <FontAwesomeIcon icon={faSmileBeam} style={{color:'#f5c71a'}} />
       </p>
       </article>
    </motion.div>
  )
}

export default Aboutme