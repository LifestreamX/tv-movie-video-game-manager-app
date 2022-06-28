import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

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
  tvListItem,
  setTvListItem,
}) => {
  let navigate = useNavigate();

  const { error, setError } = useState('');

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

  // Loading all data for Local storage
  useEffect(() => {
    setTvListItem({
      id: uuidv4(),
    });
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = [
      show,
      year,
      numberOfSeasons,
      myCurrentSeason,
      myCurrentEpisode,
    ];

    const fieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (fieldsFilled) {
      setTvListItem({
        id: uuidv4(),
        show,
        year,
        numberOfSeasons,
        myCurrentSeason,
        myCurrentEpisode,
      });

      // Setting Local Storage

      window.localStorage.setItem(tvListItem.id, JSON.stringify(tvListItem));
      JSON.parse(window.localStorage.getItem(tvListItem.id));
    }

    navigate('/tv-list');

    setShow('');
    setYear('');
    setNumberOfSeasons('');
    setMyCurrentEpisoide('');
    setMyCurrentSeason('');
    setMyCurrentEpisoide('');
  };

  return (
    <>
      <Container className='d-flex justify-content-center align-items-center flex-column  text-dark h-50'>
        <Col className='d-flex justify-content-center align-items-center flex-column add-tv-wrapper w-50'>
          {/* Title Section */}
          <Row className=' my-5'>
            <h1 className='text-light my-2 form-title '> TV </h1>
          </Row>

          {/*  Form section */}
          <Row className='d-flex justify-content-center h-50 w-100  rounded text-light'>
            <Form
              onSubmit={handleSubmit}
              className='text-light  form-wrapper d-flex flex-column  align-items-center '
            >
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Show</Form.Label>
                <Form.Control
                  type='text'
                  value={show}
                  onChange={handleShowChange}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  required
                  type='number'
                  value={year}
                  onChange={handleYearChange}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Total Seasons</Form.Label>
                <Form.Control
                  required
                  type='number'
                  value={numberOfSeasons}
                  onChange={handleNumberOfSeasonsChange}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>My Current Season</Form.Label>
                <Form.Control
                  required
                  type='number'
                  value={myCurrentSeason}
                  onChange={handleCurrentSeasonChange}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>My Current Episode</Form.Label>
                <Form.Control
                  required
                  type='number'
                  value={myCurrentEpisode}
                  onChange={handleCurrentEpisodeChange}
                />
              </Form.Group>
              <Button
                variant='danger'
                type='submit'
                className='w-25 button-wrapper'
              >
                <div className='d-flex justify-content-center align-items-center'>
                  <span className='mx-2 fs-3'>ADD</span>{' '}
                  <AiFillPlusCircle size={30} />
                </div>
              </Button>{' '}
            </Form>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default TvForm;
