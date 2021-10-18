import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faHome, faLaptopCode, faSmileBeam} from '@fortawesome/free-solid-svg-icons';
import '../App.css';


export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<FontAwesomeIcon icon={faHome} /> ,
        cName:'nav-text'
    },
     {
        title:'About',
        path:'/about',
        icon:<FontAwesomeIcon icon={faSmileBeam} /> ,
        cName:'nav-text'
    },
     {
        title:'Projects',
        path:'/projects',
        icon:<FontAwesomeIcon icon={faLaptopCode} /> ,
        cName:'nav-text'
    },
     {
        title:'Contact',
        path:'/contact',
        icon:<FontAwesomeIcon icon={faAddressBook} /> ,
        cName:'nav-text'
    }
]