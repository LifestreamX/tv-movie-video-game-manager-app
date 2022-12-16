import React, { useEffect } from 'react';
import MovieForm from '../components/MovieForm';
import './AddMovie.css';

const AddMovie = ({
  movie,
  setMovie,
  movieReleaseDate,
  setMovieReleaseDate,
  movieListItem,
  setMovieListItem,
}) => {
  return (
    <div className='add-movie-wrapper h-100'>
      <MovieForm
        movie={movie}
        setMovie={setMovie}
        movieReleaseDate={movieReleaseDate}
        setMovieReleaseDate={setMovieReleaseDate}
        movieListItem={movieListItem}
        setMovieListItem={setMovieListItem}
      />
    </div>
  );
};

export default AddMovie;
