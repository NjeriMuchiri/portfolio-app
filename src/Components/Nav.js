import React from 'react';
import './nav.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <section className='all-section'>
    <nav className='nav-sect'>
      <ul className='nav-list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Aboutme">Aboutme</Link></li>
        <li><Link to="/Contact">Contacts</Link></li>

        
      </ul>

    </nav>
    </section>
  )
}

export default Nav;