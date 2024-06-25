import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Happy Horizons</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/packages" style={{ color: 'white' }}>Packages</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/TodoList" style={{ color: 'white' }}>TodoList</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>Login</Nav.Link>
            <Nav.Link as={Link} to="/register" style={{ color: 'white' }}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;