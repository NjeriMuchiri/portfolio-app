import './App.css';
import Nav from './Components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Aboutme from './Pages/Aboutme';
import Contact from './Pages/Contact';



function App(){
return(
  <Router>
    <Nav />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Skills" exact component={Skills} />
      <Route path="/Aboutme" exact component={Aboutme} />
      <Route path="/Contact" exact component={Contact} />

    </Switch>
  </Router>
)
  
}


export default App;