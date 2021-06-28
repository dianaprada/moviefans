import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

/**
 * Global Variables
 */

/**
 * @method SearchNoResults
 * @description:
 * @returns {string}
 */

const SearchNoResults = () => {
  return (
    <div className="header__search--noResults"  aria-label="Search Movies Results">
        <div><FontAwesomeIcon icon={faSadTear} className="sadFace"/> </div>
        
        <div> Your search had no results  </div>
        <div> try another movie </div>
      
    </div>

  );
};

export default SearchNoResults;
