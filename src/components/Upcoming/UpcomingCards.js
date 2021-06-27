/**
 * Import
 */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

/**
 * Global Variables
 */

import { IMAGES_API } from "../../Global_variables";

/**
 * @method UpcomingCards
 * @description Upcoming Component
 * @param {object} selected
 * @param {object} closePopup
 * @returns {} React Element
 */

 const UpcomingCards = ({ result, openPopup }) => {
 
  return (
    <div className="trending__card"   onClick={() => openPopup(result.id)} aria-label="Clic for Movie Detail">
      <div className="card">
        <div className="trending__cover">
          <img src={IMAGES_API + result.poster_path} alt={result.title} aria-label="Movie Poster Image" />
        </div>
        <div className="trending__content">
          <h3 className="card__title--trending" >
            {result.title}
          </h3>
          <span className="card__rate--trending">
          <FontAwesomeIcon icon={faStar} className="card__rate--star" aria-label="Movie Star Icon"/>
          &nbsp;  {result.vote_average} 
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCards;
