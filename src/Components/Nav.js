import React from 'react';
import './nav.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/logo1.png';

const Nav = () => {
  return (
    <>
    <nav className='nav-sect'>
      <div className='nav-header'>
      <Link to='/'><img className='logo' src={Logo} alt="logo" /></Link> 
       <button className='nav-toggle'>
         <FontAwesomeIcon icon={faAlignLeft} />
       </button>
      </div>
      <ul className='nav-list'>
        <li 
        className='list'><Link to="/" style={{textDecoration:'none', color:'#c9ffe5' ,textTransform:'uppercase'}}>Home</Link></li>
        <li 
        className='list'><Link to="/Skills"
        style={{textDecoration:'none', color:'#c9ffe5' ,textTransform:'uppercase'}}>Skills</Link></li>
        <li className='list'><Link to="/Aboutme"
        style={{textDecoration:'none', color:'#c9ffe5' ,textTransform:'uppercase'}}>Aboutme</Link></li>
        <li className='list'><Link to="/Contact"
        style={{textDecoration:'none', color:'#c9ffe5' ,textTransform:'uppercase'}}>Contacts</Link></li>

        
      </ul>

    </nav>
    </>
  )
}

export default Nav;