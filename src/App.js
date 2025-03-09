import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import NumResults from "./NumResults";
import Search from "./Search";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import WatchedSummary from "./WatchedSummary";
import Box from "./Box";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const KEY = process.env.REACT_APP_KEY;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {}, []);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

        if (!res.ok) {
          throw new Error("X_X Something went wrong with fetching movies");
        }

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if(query.length < 3) {
      setMovies([]);
      setError("Let's search movies!")
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar>
        <Search setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <MovieList movies={movies} />
          )} */}

          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          <>
            <WatchedSummary watched={watched} />
            <WatchedList watched={watched} />
          </>
        </Box>
      </Main>
    </>
  );
}
