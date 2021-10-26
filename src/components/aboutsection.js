import React from 'react';
import '../App.css';
import girlboss from '../images/aboutme.jpg';


function AboutSection(){
    return(
        <>
        <section className="part">
            <div className="isall-about">
               <article className="photo-me">
                   <div className="info-title">
                      <h2>About</h2>
                      </div>
                    <img src={girlboss} alt="NjeriMuchiri" className="me-image" />
               </article>
            </div>
        </section>
        </>
    )
}

export default AboutSection;