import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function Moviedetail({
  selectedId,
  setSelectedId,
  addWatchedMovie,
  watchedMovie,
}) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  function handleAdd() {
    const Movie = {
      movieID: selectedId,
      poster: detail.Poster,
      title: detail.Title,
      runtime: detail.Runtime,
      year: detail.Year,
      imdbRating: detail.imdbRating,
    };
    !isWatched && addWatchedMovie(Movie);
    // setSelectedId(null);
  }

  // function addwatchMovie()
  useEffect(
    function () {
      async function getDetail() {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=d060a594&i=${selectedId}`
        );
        const data = await res.json();
        setDetail(data);
        setLoading(false);
      }
      getDetail();
    },
    [selectedId]
  );

  //  will check whether the movie is already added in the watched list
  const isWatched = watchedMovie
    .map((movie) => movie.movieID)
    .includes(selectedId);

  return (
    <div className={`box movie-detail`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="top-section">
            <div className="close-icon" onClick={() => setSelectedId(null)}>
              <i class="fa-solid fa-left-long"></i>
            </div>
            <div className="detail-img-section">
              <img src={detail.Poster} alt="Movie Poster" />
            </div>
            <div className="detail-section">
              <h1 className="movie-name">{detail.Title}</h1>
              <p>
                {detail.Released} &bull; {detail.Runtime}
              </p>
              <p className="genre">{detail.Genre}</p>
              <p className="rating">⭐{detail.imdbRating} IMDb Rating</p>
            </div>
          </div>
          <div className="add-to-watch-section">
            {!isWatched ? (
              <button className="add-watch-btn" onClick={() => handleAdd()}>
                <span className="icon">
                  <i class="fa-solid fa-plus"></i>
                </span>
                {isWatched ? "Added to Watch List" : "Add to Watchlist"}
              </button>
            ) : (
              <p className="added-status">Added to Watch List</p>
            )}
          </div>
          <div className="bottom-section">
            <p className="detail-para">{detail.Plot}</p>
            <p className="actor">Starring {detail.Actors}</p>
            <p className="director"> Directed by {detail.Director}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Moviedetail;
