import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='movie-list' element={<MovieList />} />
        <Route path='tv-list' element={<TvList />} />
        <Route path='video-game-list' element={<VideoGameList />} />
        <Route path='add-tv-show' element={<AddTVShow />} />
        <Route path='add-movie' element={<AddMovie />} />
        <Route path='add-video-game' element={<AddVideoGame />} />
      </Route>
    </Routes>
  );
}

export default App;
