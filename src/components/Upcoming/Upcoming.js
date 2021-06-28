/**
 * Import
 */
import React from "react";
import UpcomingCards from "./UpcomingCards";

/**
 * @method Upcoming
 * @description Trending Component
 * @param {object} selected
 * @param {object} closePopup
 * @returns {} React Element
 */

 const Upcoming = ({ upcomingResults, openPopup  }) => {
  return (
    <section className="trending__section" aria-label="Upcoming Movies" name="Upcoming" id="Upcoming">
      <div className="trending__container">
        {/* section title */}
        <h2 className="trending__title">Upcoming Movies</h2>
        {/* end section title */}
        <div className="trending__items">
          {/* Trending Cards */}
          {upcomingResults.map(
            (result) =>
              result.poster_path !== null &&
              result.media_type !== "tv" && (
                <UpcomingCards key={result.id} result={result} openPopup={openPopup} />
              )
          )}
          {/* Trending Cards */}
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
