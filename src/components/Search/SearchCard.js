import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

/**
 * Global Variables
 */

 import { IMAGES_API } from '../../Global_variables';

/**
 * @method SearchCard
 * @description: Result Search Card
 * @param {object} result
 * @param {object} openPopup
 * @returns {} React Element
 */

const SearchCard = ({ result, openPopup }) => {
  let releaseYear = result.release_date.slice(0, 4);
  return (
    <div className="item" onClick={() => openPopup(result.id)} aria-label="Clic for Movie Detail">
    {/* card */}
    <div className="card card--big">
      <div className="card__cover">
      <img src={IMAGES_API + result.poster_path} alt={result.title} aria-label="Movie Poster Image"  />
        <div className="card__play block-ellipsis" aria-label="Movie Overview">
        {result.overview}
        </div>
      </div>
      <div className="card__content">
        <h3 className="card__title" onClick={openPopup}> 
        {result.title}</h3>
        <span className="card__category">
          Release year: {releaseYear}
        </span>
        <span className="card__rate">
          <FontAwesomeIcon icon={faStar} className="card__rate--star"/> 
          &nbsp;  {result.vote_average} 
        </span>
      </div>
    </div>
    {/* end card */}
  </div>
  );
};

export default SearchCard;
