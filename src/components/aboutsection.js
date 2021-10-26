import React from 'react';
import '../App.css';
import girlboss from '../images/aboutme.jpg';


function AboutSection(){
    return(
        <>
        <section className="part">
            <div className="isall-about">
               <article className="photo-me">
                    <img src={girlboss} alt="NjeriMuchiri" className="me-image" />
               </article>
               <p className="aboutme-home">
                Being a website designer and developer is currently
                and has been my second nature for the last 1 year and a half that I have been in this field.As I embark on this journey of designing,I look forward to coming up
                with great products,that will make my clients happy and contented.
               </p>
            </div>
        </section>
        </>
    )
}

export default AboutSection;