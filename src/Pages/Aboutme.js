import React from 'react';
import Kashee from '../images/aboutme.jpg';

const Aboutme = () => {
  return (
    <div className='aboutme-section'>
       <article className='info-section'>
       <img src={Kashee} alt="NjeriMuchiri" />
       <p className='kashee-info'>
         Hi,my name is NjeriMuchiri and I am a webdeveloper,webdesigner and an SEO practitioner. I have been in this creative space for a while now and I am well familiar and experienced with everything that goes around in the process of developing great products that will have best user experience and one that will be ranked high by the Search Engines.
       </p>
       </article>
    </div>
  )
}

export default Aboutme