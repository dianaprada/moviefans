/**
 * Import Components
 */
 
 import React, { useState } from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars } from "@fortawesome/free-solid-svg-icons";
 
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
       {/* end header nav */}
     </React.Fragment>
   );
 };
 
 export default NavRouter;
 