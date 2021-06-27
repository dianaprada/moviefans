/**
 * Import
 */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/**
 * @method SearchBox
 * @description input handler Component
 * @param {object} handleInput
 * @param {object} search
 * @returns {} React Element
 */

const SearchBox = ({ handleInput, search }) => {
  return (
    <section>
      <div className="header__search">
        <div className="header__search-content">
          <label htmlFor="search_box" className="search__label" />
          <input
            onChange={handleInput}
            onKeyPress={search}
            type="text"
            placeholder="Search for a movie..."
            id="search_box"
            name="search_box"
            aria-label="Input search movie"
          />
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
