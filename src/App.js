import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import MovieList from './pages/MovieList';
import TvList from './pages/TvList';
import VideoGameList from './pages/VideoGameList';
import AddTVShow from './pages/AddTVShow';
import AddMovie from './pages/AddMovie';
import AddVideoGame from './pages/AddVideoGame';

function App() {
  const location = useLocation();

  const [show, setShow] = useState('');
  const [year, setYear] = useState('');
  const [numberOfSeasons, setNumberOfSeasons] = useState('');
  const [myCurrentSeason, setMyCurrentSeason] = useState('');
  const [myCurrentEpisode, setMyCurrentEpisoide] = useState('');

  const [tvListItem, setTvListItem] = useState([]);

  // Movie
  const [movieListItem, setMovieListItem] = useState([]);
  const [movie, setMovie] = useState('');
  const [movieReleaseDate, setMovieReleaseDate] = useState('');

  // Video game
  const [videoGameList, setVideoGameList] = useState([]);
  const [videoGame, setVideoGame] = useState();
  const [videoGameReleaseDate, setVideoGameReleaseDate] = useState('');
  const [videoGamePlatform, setVideoGamePlatform] = useState('');

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='' element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* TV routes */}
        <Route
          path='add-tv-show'
          element={
            <AddTVShow
              show={show}
              setShow={setShow}
              year={year}
              setYear={setYear}
              numberOfSeasons={numberOfSeasons}
              setNumberOfSeasons={setNumberOfSeasons}
              myCurrentSeason={myCurrentSeason}
              setMyCurrentSeason={setMyCurrentSeason}
              myCurrentEpisode={myCurrentEpisode}
              setMyCurrentEpisoide={setMyCurrentEpisoide}
              tvListItem={tvListItem}
              setTvListItem={setTvListItem}
            />
          }
        />
        <Route
          path='tv-list'
          element={
            <TvList
              show={show}
              year={year}
              numberOfSeasons={numberOfSeasons}
              myCurrentSeason={myCurrentSeason}
              myCurrentEpisode={myCurrentEpisode}
              tvListItem={tvListItem}
              setTvListItem={setTvListItem}
              setShow={setShow}
            />
          }
        />
        {/* Movie routes */}
        <Route
          path='add-movie'
          element={
            <AddMovie
              movie={movie}
              setMovie={setMovie}
              movieReleaseDate={movieReleaseDate}
              setMovieReleaseDate={setMovieReleaseDate}
              movieListItem={movieListItem}
              setMovieListItem={setMovieListItem}
            />
          }
        />
        <Route
          path='movie-list'
          element={
            <MovieList
              movieListItem={movieListItem}
              setMovieListItem={setMovieListItem}
            />
          }
        />

        {/* Videogame routes */}
        <Route
          path='add-video-game'
          element={
            <AddVideoGame
              videoGameList={videoGameList}
              setVideoGameList={setVideoGameList}
              videoGame={videoGame}
              setVideoGame={setVideoGame}
              videoGameReleaseDate={videoGameReleaseDate}
              setVideoGameReleaseDate={setVideoGameReleaseDate}
              videoGamePlatform={videoGamePlatform}
              setVideoGamePlatform={setVideoGamePlatform}
            />
          }
        />
        <Route
          path='video-game-list'
          element={
            <VideoGameList
              videoGameList={videoGameList}
              setVideoGameList={setVideoGameList}
            />
          }
        />
        {/* <Route element={() => <Navigate to='/' />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
