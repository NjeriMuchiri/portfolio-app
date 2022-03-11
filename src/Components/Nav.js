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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Aboutme">Aboutme</Link></li>
        <li><Link to="/Contact">Contacts</Link></li>

        
      </ul>

    </nav>
    </>
  )
}

export default Nav;