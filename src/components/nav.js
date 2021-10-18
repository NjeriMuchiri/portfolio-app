import React,{useState} from 'react';
import '../App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignRight} from '@fortawesome/free-solid-svg-icons';
import {SidebarData} from './sidebardata';
import { Link } from 'react-router-dom';

function Navigation(){
     const[sidebar,setSidebar] = useState(false);
      
     const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
          <div className="navbar">
         <h4 className="logo-name"><a href="/">NjeriMuchiri</a></h4>
         <button onClick={showSidebar} className="nav-bars">
            <FontAwesomeIcon icon={faAlignRight} />
         </button>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu' }>
          <ul className="nav-menu-items" onClick={showSidebar} >
              <li className="navbar-toggle">
                  {/* <Link to="#" className="nav-bars"><FontAwesomeIcon icon={faTimes}/> 
                  </Link>*/}
                  </li>
               {SidebarData.map((item,index) =>{
                   return(
                       <li key={index} className={item.cName}>
                           <Link to={item.path}>
                               {item.icon}
                               <span>{item.title}</span>
                           </Link>
                           </li>
                   )
               })}
          </ul>
        </nav>
         </>
    )
        
};
export default Navigation;