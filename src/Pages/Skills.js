import React from 'react'
import {motion} from "framer-motion/dist/framer-motion.dev";

function Skills(){
  return (
    <motion.div 
     
       initial = {{width: 0}}
       animate = {{width: "100%"}}
       exit = {{x: window.innerWidth, transition:{duration: 0.1}}}
    
    >
      Skills
    </motion.div>
  )
}

export default Skills