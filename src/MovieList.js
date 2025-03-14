import Movie from "./Movie";

export default function MovieList({ movies, handleSelect }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} handleSelect={handleSelect}/>
      ))}
    </ul>
  );
}