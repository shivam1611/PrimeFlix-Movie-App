import React from "react";

function Card({ img, title, selectMovie, movieId, selectedId, type, year }) {
  return (
    <li
      className={`movie-card ${selectedId === movieId && "card-active"}`}
      onClick={() => selectMovie(movieId)}
    >
      <div className="img-section">
        <img src={img} alt="poster" />
      </div>
      <div className="card-detail-section">
        <h1 className="title">{title}</h1>
        <p className="type">{type}</p>
        <p className="year">{year}</p>
      </div>
    </li>
  );
}

export default Card;
