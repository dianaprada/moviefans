/**
 * Import Components
 */
 
 import React, { useState } from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
 
 import { Link } from "react-router-dom";

/**
 * Import Components
 */

 /**
  * @method NavRouter
  * @description: Header - Menu component
  * @returns {string} React Element
  */
 
 const NavRouter = () => {
     const [ isMobile, setIsMobile] = useState(true);
   return (
     <React.Fragment>
       {/* header nav */}
       <ul className="header__nav">
         <li className="header__nav-item" aria-label="Navigation - Search">
           <Link to="/" className="header__nav-link">
             Search
           </Link>
         </li>

         <li className="header__nav-item" aria-label="Navigation - Tendiing">
           <Link to="/trending" className="header__nav-link">
             Trending
           </Link>
         </li>
         <li className="header__nav-item" aria-label="Navigation - Upcoming">
           <Link to="/upcoming" className="header__nav-link">
             Upcoming
           </Link>
         </li>
       </ul>

       <button className="header__mobile-icon" aria-label="Mobile Menu" aria-roledescription="Button" >
         {isMobile ? 
            ( <FontAwesomeIcon icon={faTimes} className="header__nav--icon" /> ) 
            : 
            ( <FontAwesomeIcon icon={faBars} className="header__nav--icon" /> )
         }
       </button>
       {/* end header nav */}
     </React.Fragment>
   );
 };
 
 export default NavRouter;
 