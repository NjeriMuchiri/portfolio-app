import React from 'react';
import '../App.css';
import girlboss from '../images/aboutme.jpg';
import boss from '../images/headerimg.jpg';



function AboutSection(){
    return(
        <>
        <section class="part">
      <div class="section-title">
        <h2>About</h2>
      </div>
      <div class="section-center blog-center">
        <div class="card">
          <div class="card-side card-front">
            <img src={girlboss} alt="NjeriMuchiri" />
            <div class="card-info">
              <h4>About Me</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                nisi ut a est eum tempora dolorum temporibus voluptatibus!
                Natus, provident.
              </p>
              <div class="card-footer">
                <img src={boss} alt="Njerimuchiri" />
                <button class="btn">read more</button>
          </div>
            </div>
        </div>
        </div>
        </div>
        </section>
        </>
    );
};

export default AboutSection;