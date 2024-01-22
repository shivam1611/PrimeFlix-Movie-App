import React from "react";

function WatchedStatus({
  watchedMovie,
  setShowWatchedMovie,
  showWatchedMovie,
}) {
  return (
    <div
      className="watch-status-section"
      onClick={() => setShowWatchedMovie((show) => !show)}
    >
      <h1>Your Watchlist 🍿</h1>
      <div className=" toggle-icon">
        {showWatchedMovie ? (
          <i class="fa-solid fa-angle-up"></i>
        ) : (
          <i class="fa-solid fa-angle-down"></i>
        )}
      </div>
      <p>🎬{watchedMovie.length} Movies</p>
    </div>
  );
}

export default WatchedStatus;
