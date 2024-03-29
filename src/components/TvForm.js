import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Forms.css';

const TvForm = ({
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
  setTvListItem,
  tvListItem,
  setVideoGameList,
}) => {
  let navigate = useNavigate();

  let inputRef = useRef(null);

  // Focus first form input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Setting the input to the proper state
  const handleShowChange = (e) => {
    setShow(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleNumberOfSeasonsChange = (e) => {
    setNumberOfSeasons(e.target.value);
  };
  const handleCurrentSeasonChange = (e) => {
    setMyCurrentSeason(e.target.value);
  };
  const handleCurrentEpisodeChange = (e) => {
    setMyCurrentEpisoide(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const ListItem = {
      id: uuidv4(),
      show: show,
      year: year,
      numberOfSeasons: numberOfSeasons,
      myCurrentSeason: myCurrentSeason,
      myCurrentEpisode: myCurrentEpisode,
    };

    const newTv = [...tvListItem, ListItem];
    setTvListItem(newTv);

    // Tvshow local storage setter
    localStorage.setItem('tvshows', JSON.stringify(newTv));

    navigate('/tv-list');

    // Reset values after form submitt
    setShow('');
    setYear('');
    setNumberOfSeasons('');
    setMyCurrentEpisoide('');
    setMyCurrentSeason('');
    setMyCurrentEpisoide('');
  };

  return (
    <>
      <Container className='d-flex form absolute h-100'>
        <Col className='d-flex flex-column align-items-center justify-content-center '>
          {/* Title Section */}
          <Row className='w-50 text-center'>
            <h1 className='text-light my-5 form-title'> ADD SHOW </h1>
          </Row>

          {/*  Form section */}
          <Row className='d-flex justify-content-center h-50 w-100  rounded text-light '>
            <Form
              onSubmit={handleSubmit}
              className='text-light  form-wrapper d-flex flex-column  align-items-center '
            >
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Show</Form.Label>
                <Form.Control
                  value={show}
                  onChange={handleShowChange}
                  required
                  ref={inputRef}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  required
                  value={year}
                  onChange={handleYearChange}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Total Seasons</Form.Label>
                <Form.Control
                  required
                  value={numberOfSeasons}
                  onChange={handleNumberOfSeasonsChange}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>My Current Season</Form.Label>
                <Form.Control
                  required
                  value={myCurrentSeason}
                  onChange={handleCurrentSeasonChange}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>My Current Episode</Form.Label>
                <Form.Control
                  required
                  value={myCurrentEpisode}
                  onChange={handleCurrentEpisodeChange}
                />
              </Form.Group>
              <div className='total-button-wrapper'>
                <Button
                  variant='primary'
                  type='submit'
                  className='w-25 button-wrapper '
                  id='button-mobile'
                >
                  <div className='d-flex justify-content-center align-items-center add-button-wrapper'>
                    <span className='mx-2 fs-4 add-button'>ADD</span>{' '}
                    <AiFillPlusCircle size={30} />
                  </div>
                </Button>{' '}
              </div>
            </Form>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default TvForm;
