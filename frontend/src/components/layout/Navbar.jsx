import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-secondary p-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
        <img src='' alt='Veterinaria' className='me-2'/>
        Veterinaria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' className='text-white'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about' className='text-white'>About</Nav.Link>
            <Nav.Link as={Link} to='/planes' className='text-white'>Planes</Nav.Link>
          </Nav>
          <Nav className='d-flex'>  
            <Nav.Link as={Link} to='/login' className='btn btn-outline-warning'>Login</Nav.Link>
            <Nav.Link as={Link} to='/login' className='btn btn-outline-warning'>Sign in</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;