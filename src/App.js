import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Movielist from "./components/Movielist";
import Moviedetail from "./components/Moviedetail";
import Loader from "./components/Loader";
import Error from "./components/Error";
import WatchedMovie from "./components/WatchedMovie";
import WatchedBox from "./components/WatchedBox";
import WatchedStatus from "./components/WatchedStatus";

function App() {
  // ################## Global States ###################################

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watchedMovie, setWatchedMovie] = useState([]);
  const [showWatchedMovie, setShowWatchedMovie] = useState(false);

  // Function to select the movie

  function selectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  // function to add movie to watch list
  function addWatchedMovie(movie) {
    setWatchedMovie((watchedMovie) => [movie, ...watchedMovie]);
  }

  function deleteMovie(id) {
    setWatchedMovie((watchedMovie) =>
      watchedMovie.filter((movie) => movie.movieID !== id)
    );
  }

  useEffect(
    function () {
      async function getMovie() {
        setMovies([]);
        setSelectedId(null);
        setError(false);
        setIsLoading(true);
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=d060a594&s=${query}`
          );
          if (!res.ok) throw new Error("Error occured!!");
          const data = await res.json();
          if (data.Response === "False") throw new Error("No Movie Found");
          setMovies(data.Search);
          console.log(data);
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError(false);
        return;
      }

      getMovie();
    },
    [query]
  );
  return (
    <div className="app-container">
      <Navbar
        query={query}
        setQuery={setQuery}
        movies={movies}
        total_movie={movies?.length}
      />

      <div className="main">
        <div className="box">
          <Movielist
            movies={movies}
            isLoading={isLoading}
            error={error}
            selectMovie={selectMovie}
            selectedId={selectedId}
          />
        </div>
        <div className="box">
          {selectedId ? (
            <Moviedetail
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              watchedMovie={watchedMovie}
              addWatchedMovie={addWatchedMovie}
            />
          ) : (
            <>
              <WatchedStatus
                watchedMovie={watchedMovie}
                setShowWatchedMovie={setShowWatchedMovie}
                showWatchedMovie={showWatchedMovie}
              />

              <WatchedBox
                watchedMovie={watchedMovie}
                showWatchedMovie={showWatchedMovie}
                setWatchedMovie={setWatchedMovie}
                deleteMovie={deleteMovie}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
