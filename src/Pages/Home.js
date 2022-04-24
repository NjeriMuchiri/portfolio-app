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
         <p className='karibu-info'>Hey 
         beautiful people, <span>Welcome</span> all to my creative space and enjoy your stay!</p>
       </div>
      </motion.div>

    </>
  )
}

export default Home