import React, { useEffect, useState } from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { getPopularMovies } from "../../services/apiCalls";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    async function fecthData() {
      let response = await getPopularMovies();
      console.log(response.data.results);
      setMovies(response.data.results);
    }
    fecthData();
  }, []);

  const selectMovie = (movie) => {
    setSelected(movie);
  };

  if (movies.length > 0) {
    return (
      <div className="homePage">
        <div className="leftSide">
          {movies.map((movie) => {
            return (
              <div className="movieCard" key={movie.id}>
                <div onClick={() => selectMovie(movie)}><img className="movieSmallImage" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/></div>
                <div >{movie.title}</div>
                <div>{movie.vote_average}</div>
              </div>
            );
          })}
        </div>
        <div className="rightSide">
            {
                selected?.id !== undefined &&
                <MovieDetail movie={selected} />
            }
        </div>
      </div>
    );
  } else {
    return <div className="homeLoadingDesign">LOADING....</div>;
  }
};

export default Home;
