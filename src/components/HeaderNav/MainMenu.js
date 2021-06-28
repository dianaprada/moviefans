/**
 * Import Components
 */
import React from "react";
import Nav from "./Nav"

/**
 * @method MainMenu
 * @description: Header - Menu component
 * @returns {string} React Element
 */

const MainMenu = () => {
  return (
    <header className="header" aria-label="Header">
      <nav className="header__navbar" aria-label="Navigation - Main Menu">
        <a href="#" className="header__navbar--logo">
          <img
            className="header__navbar--img"
            src="./assets/images/logo_movie_fans_6.png"
            alt="MovieFans Logo"
          />
        </a>
        <Nav />
      </nav>
      <h1 className="header__h1" aria-label="MovieFans Main Tittle">
        <span className="h1_pink">MovieFans</span> – Movies, &amp; Cinema Info
      </h1>
    </header>
  );
};

export default MainMenu;
