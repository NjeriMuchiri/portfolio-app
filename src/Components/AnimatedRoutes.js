import React from 'react';
import { 
  Route,
  Switch,
  useLocation  
}  from 'react-router-dom';
import Home from '../Pages/Home';
import Skills from '../Pages/Skills';
import Aboutme from '../Pages/Aboutme';
import Contact from '../Pages/Contact';
import {AnimatePresence} from 'framer-motion/dist/framer-motion';

function AnimatedRoutes(){
    const location = useLocation();
  return (
      <AnimatePresence>
      <Switch locations = {location} key = {location.pathname}>
      <Route path="/" exact component={Home} />
      <Route path="/Skills" exact component={Skills} />
      <Route path="/Aboutme" exact component={Aboutme} />
      <Route path="/Contact" exact component={Contact} />
  </Switch>
  </AnimatePresence>
  )
}
export default AnimatedRoutes