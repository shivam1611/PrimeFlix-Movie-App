import React from "react";
import WatchedMovie from "./WatchedMovie";

function WatchedBox({ watchedMovie, showWatchedMovie, deleteMovie }) {
  return (
    <ul className="watched-box">
      {showWatchedMovie &&
        watchedMovie.map((movie) => (
          <WatchedMovie
            poster={movie.poster}
            key={movie.movieID}
            movieID={movie.movieID}
            title={movie.title}
            imdbRating={movie.imdbRating}
            runtime={movie.runtime}
            year={movie.year}
            deleteMovie={deleteMovie}
          />
        ))}
    </ul>
  );
}

export default WatchedBox;
