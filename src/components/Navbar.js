import React from "react";

function Navbar({ query, setQuery, total_movie, movies }) {
  return (
    <div className="navbar">
      <div className="logo">PETFLIX</div>
      <form action="backend.php" className="search-section">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="input-field"
          placeholder="Movie, Shows, Drama..."
        />
      </form>
      <div className="result-section">
        {movies?.length !== 0 ? `${total_movie} Results found` : ""}
      </div>
    </div>
  );
}

export default Navbar;
