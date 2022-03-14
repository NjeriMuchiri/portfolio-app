import React from 'react';
import Kashee from '../images/aboutme.jpg';
import '../Components/Aboutme.css';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Aboutme = () => {
  return (
    <div className='aboutme-section'>
       <article className='info-section'>
       <img src={Kashee} alt="NjeriMuchiri" />
       <p className='kashee-info'>
         Hi,my name is NjeriMuchiri and I am a WebsiteDeveloper,WebsiteDesigner and an SEO practitioner. I have been in this creative space for a while now and I am well familiar and experienced with everything that goes around in the process of developing great products that will have best user experience and one that will be ranked high by the Search Engines. I look forward to working with and for anyone who would like to work with me. Check out my contact page for the contact info and let's connect. See you soon <FontAwesomeIcon icon={faSmileBeam} style={{color:'#f5c71a'}} /> .
       </p>
       </article>
    </div>
  )
}

export default Aboutme