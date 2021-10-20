import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faHome,faSmileBeam,faLaptopCode} from '@fortawesome/free-solid-svg-icons';

export const MenuList = [
  
      {
        title:"Home",
        cName:"navbar",
        icon:<FontAwesomeIcon icon={faHome} />,
        url:"/",
    },
      {
        title:"About",
        cName:"navbar",
        icon:<FontAwesomeIcon icon={faSmileBeam} />,
        url:"/about",
    },
      {
        title:"Project",
        cName:"navbar",
        icon:<FontAwesomeIcon icon={faLaptopCode} />,
        url:"/projects",
    },
      {
        title:"Contact",
        cName:"navbar",
        icon:<FontAwesomeIcon icon={faAddressBook} />,
        url:"/contact",
    },
];