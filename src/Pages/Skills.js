import React from 'react';
import '../Components/Skills.css';
import {motion} from "framer-motion/dist/framer-motion.dev";

function Skills(){
  return (
    <>
    <motion.div 
       initial = {{width: 0}}
       animate = {{width: "100%"}}
       exit = {{x: window.innerWidth, transition:{duration: 0.1}}}
    className='skills-abt'>
      <div className='reveal-skills skill_reveal'>
         <article className='skills_1'>
          <p className='skill-info'>Web Developer || Designer.</p>
         <button className='revealing_time'><a className="skills_sets" href="https://monjotronicsolutions.co.ke/" target="_blank" rel='noreferrer noopener'><span>Check Out</span><span></span></a></button>
        </article>
        <article className='skills_2'>
          <p className='skill-info'>Working with APIs.</p>
           <button className='revealing_time'><span>Check Out</span><span></span></button>
        </article>
        <article className='skills_3'>
          <p className='skill-info'>Fullstack Developer.</p>
           <button className='revealing_time'><span>Check Out</span><span></span></button>
        </article>
         <article className='skills_4'>
          <p className='skill-info'>SEO Practioner.</p>
           <button className='revealing_time'><span>Check Out</span><span></span></button>
        </article>
      </div>
    </motion.div>
    </>
  )
}

export default Skills