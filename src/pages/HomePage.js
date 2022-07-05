import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import TvShow from '../assets/tv-show.jpg';
import Movie from '../assets/movie.jpg';
import VideoGame from '../assets/video-game.jpg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <Container className=' d-flex flex-column justify-content-evenly align-items-center h-100 home-wrapper'>
      <Row>
        <Col className='d-flex justify-content-center align-items-center flex-column'>
          <h1 className='title'> TV | Movie | Video Game </h1>
          <h2 className='title-subheading my-5'>List Manager </h2>
        </Col>
      </Row>
      <Row>
        <CardGroup className='text-dark '>
          {/* TV card */}
          <Card className='mx-5 card-wrapper border border-dark card'>
            <Card.Img variant='top' src={TvShow} />
            <Card.Body className='d-flex justify-content-evenly align-items-center link-wrapper '>
              <Link to='tv-list'>
                <Card.Title className='fs-1 card-title'>
                  <span className='card-title'>MY TV LIST</span>
                </Card.Title>{' '}
              </Link>

              <Link to='tv-list'>
                <BsFillArrowRightCircleFill size={70} className='arrow-icon' />
              </Link>
            </Card.Body>
          </Card>
          {/* Movie card */}
          <Card className='mx-5 card-wrapper border border-dark card'>
            <Card.Img variant='top' src={Movie} />
            <Card.Body className='d-flex justify-content-evenly align-items-center '>
              <Link to='movie-list'>
                <Card.Title className='fs-1 '>
                  <span className='card-title'>MY MOVIE LIST</span>
                </Card.Title>
              </Link>
              <Link to='movie-list'>
                <BsFillArrowRightCircleFill size={70} className='arrow-icon' />
              </Link>
            </Card.Body>
          </Card>
          {/* Video game card */}
          <Card className='mx-5 card-wrapper border border-dark'>
            <Card.Img variant='top' src={VideoGame} />
            <Card.Body className='d-flex justify-content-evenly align-items-center '>
              <Link to='video-game-list'>
                <Card.Title className='fs-1 card-title'>
                  <span className='card-title'>MY VIDEO GAME LIST</span>
                </Card.Title>
              </Link>
              <Link to='video-game-list'>
                <BsFillArrowRightCircleFill size={70} className='arrow-icon' />
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
};

export default HomePage;
