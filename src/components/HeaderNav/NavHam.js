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
 * @method NavHam
 * @description: Header - Menu component
 * @returns {string} React Element
 */

const NavHam = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <React.Fragment>
      {/* header nav */}
    
        
          
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
            <Link to="/" className="header__nav-link">
             Search
            </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
            <Link to="/trending" className="header__nav-link">
             Trending
           </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
            <Link to="/upcoming" className="header__nav-link">
             Upcoming
           </Link>
            </li>
          </ul>
      
    
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} className="menu-icon"  />
          ) : (
            <FontAwesomeIcon icon={faBars} className="menu-icon"  />
          )}
        </div>
   
      {/* end header nav */}
    </React.Fragment>
  );
};

export default NavHam;
