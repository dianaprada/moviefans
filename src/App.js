/**
 * Import
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./assets/styles/styles.css";

/**
 * Import Components
 */
import MainMenu from "./components/HeaderNav/MainMenu";

import SearchBox from "./components/Search/SearchBox";
import SearchResults from "./components/Search/SearchResults";
import SearchNoResults from "./components/Search/SearchNoResults"
import Popup from "./components/Modal/Popup";
import Trending from "./components/Trending/Trending"
import Upcoming from "./components/Upcoming/Upcoming"
import Footer from "./components/Footer/Footer";

/**
 * Global Variables
 */

import {
  API_KEY,
  SEARCH_URL,
  DETAIL_URL,
  TRENDING_URL,
  UPCOMING_URL,
  NOW_PLAYING,
} from "./Global_variables";

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

/**
 * @method App
 * @description: Main method APP
 * @returns {string} React Element
 */

const App = () => {
  const [searchMovies, setSearchMovies] = useState({
    searchQuery: "",
    results: [],
    selected: {},
  });

  const [trendingMovies, setTrendingMovies] = useState({
    trendingResults: [],
    trendingSelected: {},
  });

  const [upcomingMovies, setUpcomingMovies] = useState({
    upcomingResults: [],
    upcomingSelected: {},
  });

  /**
   * @method handleInput
   * @description input handler method
   * @param {object} e Event Information
   * @returns {} searchMovies
   */
  const handleInput = (e) => {
    let searchQueryInput = e.target.value;

    setSearchMovies((prevSearchMovies) => {
      return { ...prevSearchMovies, searchQuery: searchQueryInput };
    });

    console.log(searchMovies.searchQuery);
  };

  /**
   * @method search
   * @description Search movie method
   * @param {object} e Event Information
   * @returns {} searchMovies
   */

  const search = (e) => {
    if (e.key === "Enter") {
      axios(
        SEARCH_URL + "&api_key=" + API_KEY + "&query=" + searchMovies.searchQuery + "&include_adult=false")
        .then(({ data }) => {
        let movieResults = data.results;

        console.log("AXIOS DATA: ", data);

        setSearchMovies((prevSearchMovies) => {
          return { ...prevSearchMovies, results: movieResults };
        });
      });
    }
  };

  /**
   * @method getDefaultMovies
   * @description Load popular movies by default
   * @returns {} searchMovies
   */

  const getDefaultMovies = () => {
    axios(NOW_PLAYING + "?api_key=" + API_KEY)
    .then(({ data }) => {
      let defaultResults = data.results;

      console.log("DEFAULT RESULTS: ", defaultResults);

      setSearchMovies((prevSearchMovies) => {
        return { ...prevSearchMovies, results: defaultResults };
      });
  
    });
  };

 
    /**
   * @method getTrendingMovies
   * @description Load popular movies by default
   * @returns {} searchMovies
   */

     const getTrendingMovies = () => {
      axios(TRENDING_URL)
      .then(({ data }) => {
        
        //let trendingMoviesResults = data.results;

        let trendingTemp = data.results;
        let trendingMoviesResults = trendingTemp.splice(0, 15);
        
        console.log("TRENDING MOVIES: ", trendingMoviesResults);
  
        setTrendingMovies((prevTrendingMovies) => {
         return { ...prevTrendingMovies, trendingResults: trendingMoviesResults };
        }); 
      });
    };


    /**
   * @method getUpcomingMovies
   * @description Load popular movies by default
   * @returns {} searchMovies
   */


     const getUpcomingMovies = () => {
      axios(UPCOMING_URL + "?api_key=" + API_KEY)
      .then(({ data }) => {

        //let upcomingMoviesResults = data.results;

        let upcomingMoviesTemp = data.results;
        let upcomingMoviesResults = upcomingMoviesTemp.splice(0, 18);
  
        console.log("UPCOMING MOVIES: ", upcomingMoviesResults);  
  
        setUpcomingMovies((prevUpcomingMovies) => {
         return { ...prevUpcomingMovies, upcomingResults: upcomingMoviesResults };
        }); 
      });
    };

    /**
   * @description Load Trending movies by default
   */

  useEffect(() => {
    getDefaultMovies();
    getTrendingMovies();
    getUpcomingMovies();
  }, []);


  /**
   * @method openPopup
   * @description Open Popup movie detail
   * @param {string} id
   * @returns {} searchMovies
   */

  const openPopup = (id) => {
    axios(DETAIL_URL + id + "?api_key=" + API_KEY)
    .then(({ data }) => {
      let movieDetail = data;
      console.log("MOVIE DETAIL DATA: ", movieDetail);

      setSearchMovies((prevSearchMovies) => {
        return { ...prevSearchMovies, selected: movieDetail };
      });
    });
  };

  /**
   * @method closePopup
   * @param
   */

  const closePopup = () => {
    setSearchMovies((prevSearchMovies) => {
      return { ...prevSearchMovies, selected: {} };
    });
  };

  return (
    <Router>
      <div className="content">
        {/* header */}
        <MainMenu />
        {/* end header */}

        {/* Main */}
        <main>
          <Switch>
            <Route exact path="/">
              {/* Search Box */}
              <SearchBox handleInput={handleInput} search={search} />
              {/* end Search Box */}

              {/* Search results */}

              {searchMovies.results.length > 0 ? (
                <SearchResults
                  results={searchMovies.results}
                  openPopup={openPopup}
                />
              ) : (
                <SearchNoResults />
              )}

              {/* end Search results */}
            </Route>

            <Route path="/trending">
              {/* Trending Section */}
              <Trending
                trendingResults={trendingMovies.trendingResults}
                openPopup={openPopup}
              />

              {/* End Trending Section */}
            </Route>

            <Route path="/upcoming">
              {/* Upcoming Section */}
              <Upcoming
                upcomingResults={upcomingMovies.upcomingResults}
                openPopup={openPopup}
              />

              {/* End Upcoming Section */}
            </Route>
          </Switch>

          {/* Search Popup */}
          {typeof searchMovies.selected.title != "undefined" ? (
            <Popup selected={searchMovies.selected} closePopup={closePopup} />
          ) : (
            false
          )}
          {/* End Search Popup*/}

          {/* Trending Popup */}

          {typeof trendingMovies.trendingSelected.id != "undefined" ? (
            <Popup
              selected={trendingMovies.trendingSelected}
              closePopup={closePopup}
            />
          ) : (
            false
          )}

          {/* End Popup */}

          {/* Upcoming Popup */}

          {typeof upcomingMovies.upcomingSelected.id != "undefined" ? (
            <Popup
              selected={upcomingMovies.upcomingSelected}
              closePopup={closePopup}
            />
          ) : (
            false
          )}
          {/* END Upcoming Popup  */}
        </main>
        {/* End Main */}

        {/* Footer */}
        <Footer />
        {/* End Footer */}
      </div>
    </Router>
  );
};

export default App;
