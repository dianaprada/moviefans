import React from "react";

/**
 * Import Components
 */

import SearchCard from "./SearchCard";

/**
 * Global Variables
 */

/**
 * @method SearchResults
 * @description:
 * @returns {string}
 */

const SearchResults = ({ results, openPopup }) => {
  return (
    <section className="resultsGrid"  aria-label="Search Movies Results">
      {/* SearchCard Component Here */}
      {results.map(
        (result) =>
          result.poster_path !== null &&
          result.overview !== "" && (
            <SearchCard key={result.id} result={result} openPopup={openPopup} />
        
          )
      )}
    </section>

  );
};

export default SearchResults;
