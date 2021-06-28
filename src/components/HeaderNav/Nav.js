/**
 * Import Components
 */
import React from "react";

/**
 * @method Nav
 * @description: Header - Menu component
 * @returns {string} React Element
 */

const Nav = () => {
  return (
    <React.Fragment>
      {/* header nav */}
      <ul className="header__nav">
        <li className="header__nav-item">
          <a href="#Search" className="header__nav-link">
            Search
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#Trending" className="header__nav-link">
            Trending
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#Upcoming" className="header__nav-link">
            Upcoming
          </a>
        </li>
      </ul>
      {/* end header nav */}
 
    </React.Fragment>
  );
};

export default Nav;
