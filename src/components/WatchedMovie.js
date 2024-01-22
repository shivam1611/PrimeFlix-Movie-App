import React from "react";

function WatchedMovie({
  poster,
  title,
  imdbRating,
  runtime,
  year,
  movieID,
  deleteMovie,
}) {
  // console.log(imdbID);
  return (
    <li className="watched-movie">
      <div className="watched-movie-img">
        <img src={poster} alt="Movie Poster" />
      </div>
      <div className="watched-movie-details">
        <p className="watched-movie-name">{title}</p>
        <div>
          <p className="watched-movie-length">{runtime}</p> &bull;
          <p className="watched-movie-year">{year}</p> &bull;
          <div className="watched-movie-rating">⭐{imdbRating}</div>
        </div>
      </div>
      <div className="delete-icon">
        <i class="fa-solid fa-trash" onClick={() => deleteMovie(movieID)}></i>
      </div>
    </li>
  );
}

export default WatchedMovie;
