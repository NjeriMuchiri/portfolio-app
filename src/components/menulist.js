import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faHome,faSmileBeam,faLaptopCode} from '@fortawesome/free-solid-svg-icons';

export const MenuList = [
  
      {
        title:"Home",
        icon:<FontAwesomeIcon icon={faHome} />,
        url:"/",
    },
      {
        title:"About",
        icon:<FontAwesomeIcon icon={faSmileBeam} />,
        url:"/about",
    },
      {
        title:"Project",
        icon:<FontAwesomeIcon icon={faLaptopCode} />,
        url:"/projects",
    },
      {
        title:"Contact",
        icon:<FontAwesomeIcon icon={faAddressBook} />,
        url:"/contact",
    },
];