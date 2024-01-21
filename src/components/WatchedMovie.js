import React from "react";

function WatchedMovie() {
  return (
    <li className="watched-movie">
      <div className="watched-movie-img">
        <img
          src="https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=90&crop=false"
          alt="Movie Poster"
        />
      </div>
      <div className="watched-movie-details">
        <p className="watched-movie-name">Lawda Sigh </p>
        <div className="rating-box">⭐9.5</div>
      </div>
    </li>
  );
}

export default WatchedMovie;
