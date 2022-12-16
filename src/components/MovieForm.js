import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Forms.css';

const MovieForm = ({
  movie,
  setMovie,
  movieReleaseDate,
  setMovieReleaseDate,
  movieListItem,
  setMovieListItem,
}) => {
  let navigate = useNavigate();

  let inputRef = useRef(null);

  // Focus first form input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Setting the input to the proper state
  const handleMovieChange = (e) => {
    setMovie(e.target.value);
  };
  const handleMovieReleaseDateChange = (e) => {
    setMovieReleaseDate(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const ListItem = {
      id: uuidv4(),
      movie: movie,
      movieReleaseDate: movieReleaseDate,
    };

    const newMovie = [...movieListItem, ListItem];
    setMovieListItem(newMovie);
    // Movie local storage setter
    localStorage.setItem('movies', JSON.stringify(newMovie));

    navigate('/movie-list');

    // Reset values after form submitt
    setMovie('');
    setMovieReleaseDate('');
  };

  return (
    <>
      <Container className='d-flex form absolute h-100'>
        <Col className='d-flex flex-column align-items-center justify-content-center '>
          {/* Title Section */}
          <Row className='w-50 text-center'>
            <h1 className='text-light my-2 form-title '> ADD MOVIE </h1>
          </Row>

          {/*  Form section */}
          <Row className='d-flex justify-content-center h-50 w-100  rounded text-light '>
            <Form
              onSubmit={handleSubmit}
              className='text-light  form-wrapper d-flex flex-column  align-items-center '
            >
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Movie</Form.Label>
                <Form.Control
                  value={movie}
                  onChange={handleMovieChange}
                  required
                  ref={inputRef}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  required
                  value={movieReleaseDate}
                  onChange={handleMovieReleaseDateChange}
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

export default MovieForm;
