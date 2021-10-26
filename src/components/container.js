import React from "react";
import boss from '../images/headerimg.jpg';
import '../App.css';

function Container(){
      return(
          <>
          <section className="me-section">
              <article className="about-me">
            <div className="introduction"><h1>Hi I'm Ann </h1>
             <p>Freelancer in Website Development ||
             Mobile Design, UX/UI.
              </p>
              <a href="/contact" className="hero-btn">Hireme</a>
             </div>
             <div className="photo-section">
                <img src={boss} alt="NjeriMuchiri" className="me-image" />
             </div>
              </article>

          </section>
      
          </>
      )
}
export default Container;