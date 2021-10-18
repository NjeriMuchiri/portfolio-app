import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Contact from "./pages/contact";
import About from "./pages/about";
import Projects from "./pages/projects";


function App(){
return(
 <Router>
   <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/About"  exact component={About} />
     <Route path="/Projects" exact component={Projects} />
     <Route path="/Contact"  exact component={Contact} />
     
   </Switch>
  </Router>
)
}


export default App;