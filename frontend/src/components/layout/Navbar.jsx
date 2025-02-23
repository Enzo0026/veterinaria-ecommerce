import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../views/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigationbar() {

    const [showLogin, setShowLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);

    const handleShow = ()=> setShowLogin(true);
    const handleClose = ()=> setShowLogin(false);
    const handleLogout = ()=> {
      setIsAdmin(false)
    };

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

          {isAdmin ? (
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/pacientes" className="text-white me-2">Pacientes</Nav.Link>
            <Nav.Link as={Link} to="/admin/turnos" className="text-white me-2">Turnos</Nav.Link>
            <Nav.Link as={Link} to="/admin/productos" className="text-white me-2">Productos</Nav.Link>
        </Nav>
          ) : null}

          <Nav className='d-flex'>
            {isAdmin ? (
              <Button onClick={handleLogout} variant='btn btn-outline-warning me-2'>Logout</Button>
            ) : (
              <>
                <Nav.Link className='btn btn-outline-warning' onClick={handleShow}>Login</Nav.Link>
                <Nav.Link as={Link} to='/register' className='btn btn-outline-warning'>Sign in</Nav.Link>
              </>
            )}  
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
      <LoginModal show={showLogin} handleClose={handleClose} />
    </Navbar>
  );
}

export default Navigationbar;