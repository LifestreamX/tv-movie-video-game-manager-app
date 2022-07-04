import React from 'react';
import VideoGameForm from '../components/VideoGameForm';

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
    <div className='add-movie-wrapper'>
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
