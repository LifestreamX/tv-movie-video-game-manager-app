import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsPen } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <Navbar bg='dark' expand='lg' variant='dark' className='navigation'>
      <Container className='d-flex justify-content-between p-3'>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home'>
            <BsPen size={50} className='nav-icon mx-5 ' />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto d-flex justify-content-evenly w-100'>
            <LinkContainer to='tv-list'>
              <Nav.Link className='fs-3'>TV List</Nav.Link>
            </LinkContainer>

            <LinkContainer to='movie-list '>
              <Nav.Link className='fs-3'>Movie List</Nav.Link>
            </LinkContainer>

            <LinkContainer to='video-game-list'>
              <Nav.Link className='fs-3'>Videogame List</Nav.Link>
            </LinkContainer>

            <NavDropdown title='Add' id='basic-nav-dropdown' className='fs-3'>
              <LinkContainer to='add-tv-show'>
                <NavDropdown.Item className='fs-3'>TV Show</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='add-movie'>
                <NavDropdown.Item className='fs-3'>Movie</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='add-video-game'>
                <NavDropdown.Item className='fs-3'>Video Game</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
