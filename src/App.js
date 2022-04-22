import './App.css';
import Nav from './Components/Nav';
import { 
  BrowserRouter as 
  Router,
}  from 'react-router-dom';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Footer from './Components/Footer';

function App(){
return(
  <Router>
    <Nav />
    <AnimatedRoutes />
    <Footer />
  </Router>
)
  
}


export default App;