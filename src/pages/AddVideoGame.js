import React from 'react';
import VideoGameForm from '../components/VideoGameForm';
import './AddVideoGame.css';

const AddVideoGame = ({
  videoGameList,
  setVideoGameList,
  videoGame,
  setVideoGame,
  videoGameReleaseDate,
  setVideoGameReleaseDate,
  videoGamePlatform,
  setVideoGamePlatform,
}) => {
  return (
    <div className='add-video-game-wrapper h-100'>
      <VideoGameForm
        videoGameList={videoGameList}
        setVideoGameList={setVideoGameList}
        videoGame={videoGame}
        setVideoGame={setVideoGame}
        videoGameReleaseDate={videoGameReleaseDate}
        setVideoGameReleaseDate={setVideoGameReleaseDate}
        videoGamePlatform={videoGamePlatform}
        setVideoGamePlatform={setVideoGamePlatform}
      />
    </div>
  );
};

export default AddVideoGame;
