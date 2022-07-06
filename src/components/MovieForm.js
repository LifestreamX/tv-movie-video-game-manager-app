import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

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

    navigate('/movie-list');

    // Reset values after form submitt
    setMovie('');
    setMovieReleaseDate('');
  };


  localStorage.setItem('movies', JSON.stringify(movie));



  return (
    <>
      <Container className='d-flex justify-content-center align-items-center flex-column  text-dark h-100'>
        <Col className='d-flex justify-content-center align-items-center flex-column add-movie-wrapper w-75'>
          {/* Title Section */}
          <Row className=' my-5'>
            <h1 className='text-light my-2 form-title '> Movie </h1>
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
              <Button
                variant='primary'
                type='submit'
                className='w-25 movie-button-wrapper w-75'
              >
                <div className='d-flex justify-content-center align-items-center '>
                  <span className='mx-2 fs-4 movie-add-button'>ADD </span>{' '}
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

export default MovieForm;
