import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TvForm from '../components/TvForm';
import AddTVShow from './AddTVShow';

const TvList = ({
  show,
  year,
  numberOfSeasons,
  myCurrentSeason,
  myCurrentEpisode,
  tvListItem,
}) => {

  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };

  // const [show, setShow] = useState('');
  // const [year, setYear] = useState('');
  // const [numberOfSeasons, setNumberOfSeasons] = useState('');
  // const [myCurrentSeason, setMyCurrentSeason] = useState('');
  // const [myCurrentEpisode, setMyCurrentEpisoide] = useState('');

  return (
    <div className='h-100 tv-add '>
      <Container>
        <Col>
          <Row>
            <h1>{tvListItem.show}</h1>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default TvList;
