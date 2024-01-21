import React from "react";
import Card from "./Card";
import Loader from "./Loader";
import Error from "./Error";

function Movielist({ movies, isLoading, error, selectMovie, selectedId }) {
  // console.log(movies);
  return (
    <ul className="movie-box">
      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        movies?.map((movie) => (
          <Card
            img={movie.Poster}
            title={movie.Title}
            key={movie.imdbID}
            selectMovie={selectMovie}
            movieId={movie.imdbID}
            type={movie.Type}
            selectedId={selectedId}
            year={movie.Year}
          />
        ))}
      {error && <Error message={error} />}
    </ul>
  );
}

export default Movielist;
