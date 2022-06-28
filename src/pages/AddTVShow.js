import React from 'react';
import TvForm from '../components/TvForm';

const AddTVShow = ({
  show,
  setShow,
  year,
  setYear,
  numberOfSeasons,
  setNumberOfSeasons,
  myCurrentSeason,
  setMyCurrentSeason,
  myCurrentEpisode,
  setMyCurrentEpisoide,
  tvListItem,
  setTvListItem,
}) => {
  return (
    <div className='add-tv-show-wrapper'>
      <TvForm
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
      
    </div>
  );
};

export default AddTVShow;
