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
// import EditTvShow from './pages/EditTvShow';

function App() {
  const location = useLocation();

  const [show, setShow] = useState('');
  const [year, setYear] = useState('');
  const [numberOfSeasons, setNumberOfSeasons] = useState('');
  const [myCurrentSeason, setMyCurrentSeason] = useState('');
  const [myCurrentEpisode, setMyCurrentEpisoide] = useState('');

  const [tvListItem, setTvListItem] = useState([]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='movie-list' element={<MovieList />} />
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
        {/* <Route path='/edit/:id' element={<EditTvShow />} /> */}
        <Route element={() => <Navigate to='/' />} />

        <Route path='video-game-list' element={<VideoGameList />} />
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
        <Route path='add-movie' element={<AddMovie />} />
        <Route path='add-video-game' element={<AddVideoGame />} />
      </Route>
    </Routes>
  );
}

export default App;
