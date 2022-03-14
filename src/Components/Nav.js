import React, {useState,useEffect} from 'react';
import './nav.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft,faChessQueen} from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo1.png';

const Nav = () => {
   const [toggle,setToggle] = useState(false);
   const [show,setShow] = useState(false);  
        
     const handleClick = ()=>{
       setToggle(!toggle);
     };

     useEffect(() => {
       window.addEventListener('scroll', () =>{
         if(window.scrollY > 100 ){
               setShow(true);
         }else{
           setShow(false);
         }
       });
       return () => {
         window.removeEventListener('scroll');
       }
     }, []);

  return (
    <section>
    <nav className={`nav-sect ${show && 'nav__color'}`}>
      <div className='nav-header'>
      <Link to='/'><img className='logo' src={Logo} alt="logo" /></Link> 
       <button onClick={handleClick} className='nav-toggle'>
         {toggle ? <FontAwesomeIcon icon={faChessQueen}/> :
         <FontAwesomeIcon icon={faAlignLeft}/>}
       </button>
      </div>
      <ul className={toggle ? 'show-nav-list' : 'nav-list' }>
        <li><Link to="/" style={{textDecoration:'none', color:'#c9ffe5' ,textTransform:'uppercase','&:hover':{color:'#FFFF'}}}>Home</Link></li>
        <li><Link to="/Skills"
        style={{textDecoration:'none', color:'#c9ffe5' ,textTransform:'uppercase'}}>Skills</Link></li>
        <li><Link to="/Aboutme"
        style={{textDecoration:'none', color:'#c9ffe5' ,textTransform:'uppercase'}}>Aboutme</Link></li>
        <li><Link to="/Contact"
        style={{textDecoration:'none', color:'#c9ffe5' ,textTransform:'uppercase'}}>Contacts</Link></li>
        
      </ul>

    </nav>
    </section>
  )
}

export default Nav;