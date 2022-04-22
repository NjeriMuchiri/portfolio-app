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

function AnimatedRoutes(){
    const location = useLocation();
  return (
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Skills" exact component={Skills} />
      <Route path="/Aboutme" exact component={Aboutme} />
      <Route path="/Contact" exact component={Contact} />
  </Switch>
  )
}
export default AnimatedRoutes