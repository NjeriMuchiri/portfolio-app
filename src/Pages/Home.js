import React from 'react'
import '../Components/Home.css';
import {motion} from "framer-motion/dist/framer-motion.dev";

function Home(){
  return (
    <>
      <motion.div className='container'
          
       initial = {{width: 0}}
       animate = {{width: "100%"}}
       exit = {{x: window.innerWidth, transition:{duration: 0.1}}}

      >
       <div className='home-abt'>
         <button className='reveal'>
         <p>
         <span>Welcome</span>!<span></span></p>
         </button>
       </div>
      </motion.div>

    </>
  )
}

export default Home