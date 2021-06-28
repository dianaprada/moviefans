/**
 * Import
 */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faWindowClose } from "@fortawesome/free-solid-svg-icons";


/**
 * Global Variables
 */

 import { IMAGES_API } from '../../Global_variables';

/**
 * @method Popup
 * @description Popup Component
 * @param {object} selected
 * @param {object} closePopup
 * @returns {} React Element
 */

const Popup = ({ selected, closePopup }) => {

  let releaseYear = selected.release_date.slice(0, 4);
  let budget = (new Intl.NumberFormat().format(selected.budget));
  let count = (new Intl.NumberFormat().format(selected.vote_count));
  let country = "";
  let genre = "";


  if (selected.production_countries.length === 0){
    country = "T.B.D.";
  }
  else {
     country = selected.production_countries[0].name;
  }

  if (selected.genres.length === 0){
    genre = " T.B.D.";
  }
  else {
    genre = selected.genres[0].name;
  }

  return (
    <section className="popup">
      <div className="popup__content">

        <h2 className="details__title" aria-label="Movie Tittle">
          {selected.title}
        </h2>

        <button onClick={closePopup} className="close" id="close-button" aria-label="Close Popup Button">
          <span> <FontAwesomeIcon icon={faWindowClose} /></span>
        </button>

        {/* content */}
        <div className="card--details" aria-label="Movie Detail">

          {/* card cover */}
          <div className="card__cover--details">
            <img src={IMAGES_API + selected.poster_path} alt={selected.title}  aria-label="Movie Poster Image"/>
          </div>
          {/* end card cover */}

          {/* card content */}
          <div className="card__content">
            <div className="card__wrap">
              <span className="card__rate" aria-label="Movie Vote Average">
                <FontAwesomeIcon icon={faStar} className="card__rate--star" aria-label="Movie Star Icon"/>
                &nbsp; {selected.vote_average}
              </span>
            </div>
            <div className="card__wrap">
              <span className="card__rate" aria-label="Movie Vote Count">Vote Count: {count}</span> 
            </div>
            <ul className="card__meta">
              <li aria-label="Movie Genres"><span>Genre:</span> 
                {genre}
              </li>
              <li aria-label="Movie Budget">
                <span>Budget:</span>
                US$ {budget}</li>
              <li aria-label="Movie revenue">
                <span>Status:</span> {selected.status}</li>
              <li aria-label="Movie Release Year">
                <span>Release year:</span> {releaseYear}</li>
              <li aria-label="Movie Run Time">
                <span>Running time:</span> {selected.runtime} min</li>
              <li aria-label="Movie Production Countries">
                <span>Country:</span> {country}
              </li>
            </ul>
            <div className="card__description card__description--details" aria-label="Plot">
              {selected.overview}
            </div>
          </div>
          {/* end card content */}
        </div>
        {/* end content */}

      </div>
    </section>
  );
};

export default Popup;
