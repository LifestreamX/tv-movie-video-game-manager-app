import React from 'react';
import MovieForm from '../components/MovieForm';

const AddMovie = ({
  movie,
  setMovie,
  movieYear,
  setMovieYear,
  movieListItem,
  setMovieListItem,
}) => {
  return (
    <div className='add-movie-wrapper'>
      <MovieForm
        movie={movie}
        setMovie={setMovie}
        movieYear={movieYear}
        setMovieYear={setMovieYear}
        movieListItem={movieListItem}
        setMovieListItem={setMovieListItem}
      />
    </div>
  );
};

export default AddMovie;
