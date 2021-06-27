/**
 * Import
 */
import React from "react";
import TrendingCards from "./TrendingCards";


/**
 * @method Trending
 * @description Trending Component
 * @param {object} selected
 * @param {object} closePopup
 * @returns {} React Element
 */

const Trending = ({ trendingResults, openPopup  }) => {
  return (
    <section className="trending__section" aria-label="Trending Movies">
      <div className="trending__container">
        {/* section title */}
        <h2 className="trending__title">Trending Movies</h2>
        {/* end section title */}
        <div className="trending__items">
          {/* Trending Cards */}
          {trendingResults.map(
            (result) =>
              result.poster_path !== null &&
              result.media_type !== "tv" && (
                <TrendingCards key={result.id} result={result} openPopup={openPopup} />
              )
          )}
          {/* Trending Cards */}
        </div>
      </div>
    </section>
  );
};

export default Trending;
