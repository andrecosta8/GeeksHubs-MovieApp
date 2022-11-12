import React, { useEffect, useState } from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { getSearchedMovies } from "../../services/apiCalls";
import "./Search.css";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState("");


  const handleSearchInput = (e) => {
    setSearchInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    async function fecthData() {
      let response = await getSearchedMovies(searchInput);
      setMovies(response.data.results);
    }
    fecthData();
    console.log(movies)
  }, [searchInput]);

  const selectMovie = (movie) => {
    setSelected(movie);
  };

  return (
  <div className="searchPage">
    <div className="leftside">
    <div className="searchBar">
      <input className="searchInput" type="text" name="input" id="input" title="input"
      onChange={(e) => {handleSearchInput(e) }}></input>
    </div>
    <div className="searchResults">
    {movies.map((movie) => {
            return (
              <div className="movieCard" key={movie.id}>
                <div >{movie.name}</div>
              </div>
            );
          })}
    </div>
    </div>
    <div className="rightside">
    </div>
  </div>

)};

export default Search;
