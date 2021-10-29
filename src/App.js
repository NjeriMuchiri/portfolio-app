import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Contact from "./pages/contact";
import About from "./pages/about";
import Project from "./pages/projects";
import Navigation from "./components/nav";


function App(){
return(
 <Router>
   <Navigation/>
   <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/About"   component={About} />
     <Route path="/Projects"  component={Project} />
     <Route path="/Contact"  component={Contact} />
     
   </Switch>
  </Router>
);
}


export default App;