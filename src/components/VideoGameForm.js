import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const VideoGameForm = ({
  videoGameList,
  setVideoGameList,
  videoGame,
  setVideoGame,
  videoGameReleaseDate,
  setVideoGameReleaseDate,
  videoGamePlatform,
  setVideoGamePlatform,
}) => {
  let navigate = useNavigate();

  let inputRef = useRef(null);

  // Focus first form input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Setting the input to the proper state
  const handleVideoGameChange = (e) => {
    setVideoGame(e.target.value);
  };
  const handleVideoGameReleaseDateChange = (e) => {
    setVideoGameReleaseDate(e.target.value);
  };
  const handleVideoGamePlatformChange = (e) => {
    setVideoGamePlatform(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const ListItem = {
      id: uuidv4(),
      videoGame: videoGame,
      videoGameReleaseDate: videoGameReleaseDate,
      videoGamePlatform: videoGamePlatform,
    };

    const newGame = [...videoGameList, ListItem];
    setVideoGameList(newGame);
    // Video game local storage setter
    localStorage.setItem('videogames', JSON.stringify(newGame));

    navigate('/video-game-list');

    // Reset values after form submitt
    setVideoGame('');
    setVideoGameReleaseDate('');
    setVideoGamePlatform('');
  };

  // console.log(videoGameList)

  return (
    <>
      <Container className='d-flex justify-content-center align-items-center flex-column video-game-form-wrapper  text-dark h-100 '>
        <Col className='d-flex justify-content-center align-items-center flex-column add-videogame-wrapper  w-75'>
          {/* Title Section */}
          <Row className=' my-5'>
            <h1 className='text-light my-2 form-title'> ADD GAME</h1>
          </Row>

          {/*  Form section */}
          <Row className='d-flex justify-content-center h-50 w-100  rounded text-light '>
            <Form
              onSubmit={handleSubmit}
              className='text-light  form-wrapper d-flex flex-column  align-items-center game-form '
            >
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Video Game</Form.Label>
                <Form.Control
                  value={videoGame}
                  onChange={handleVideoGameChange}
                  required
                  ref={inputRef}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  required
                  value={videoGameReleaseDate}
                  onChange={handleVideoGameReleaseDateChange}
                />
              </Form.Group>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Label>Platform</Form.Label>
                <Form.Control
                  required
                  value={videoGamePlatform}
                  onChange={handleVideoGamePlatformChange}
                />
              </Form.Group>
              <div className='total-button-wrapper'>
                <Button
                  variant='primary'
                  type='submit'
                  className='w-25 button-wrapper '
                >
                  <div className='d-flex justify-content-center align-items-center'>
                    <span className='mx-2 fs-4'>ADD</span>{' '}
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

export default VideoGameForm;
