// MovieList.js
import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = useSelector((state) =>
    state.filteredMovies.length > 0 ? state.filteredMovies : state.movies
  );

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
