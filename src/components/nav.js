 import React, {useState} from 'react';
 import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignRight,faTimes} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { MenuList } from './menulist';
import {Link} from 'react-router-dom';


function Navigation(){
         
    const[clicked,setClicked] = useState(false);

       const menuList = MenuList.map(({url,cName,icon,title},index) =>{
           return(
           <li key={index}>
               <Link to={url}>{icon} {title}</Link>
           </li>
           )
       });
       const handleClick = () =>{
           setClicked(!clicked);
       };
    return(
    <>
       <header>
      <nav className="navigation container">
          <div className="logo"><a href="/">
        NjeriMuchiri
        </a>
          </div>
          <div className="menu-icon" onClick={handleClick}>
              {clicked ? 
             <FontAwesomeIcon className="faicon" icon={faTimes} /> 
            : <FontAwesomeIcon className="faicon2" icon={faAlignRight} />}
              </div>
          <ul className={clicked ? "menu-list" : "menu-list close"}>
            {menuList}
          </ul>
      </nav>
      </header>
    </>
    );   
};
export default Navigation;