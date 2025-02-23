import React from 'react';
import { Container, Row, Col, Card, Button, CardBody } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      {/* Seccion de informacion destacada */}
      <Row className="mb-4">
        <Col>
          <h1>Bienvenido a la Veterinaria E-commerce</h1>
          <p>Explora nuestros servicios y conoce más sobre nuestra veterinaria.</p>
        </Col>
      </Row>

      {/* Sección de servicios */}
      <Row className="mb-4">
        <Col>
          <h2>Nuestros servicios</h2>
          <ul>
            <li>Consultas veterinarias</li>
            <li>Vacunación</li>
            <li>Cirugías</li>
            <li>Peluquería canina</li>
          </ul>
        </Col>
      </Row>
      {/* Sección productos */}
      <Row className="mb-4">
        <Col>
          <h2>Productos destacados</h2>
          <Row>
            <Col md={4}><Card><Card.Body><p>Producto 1</p></Card.Body></Card></Col>
            <Col md={4}><Card><Card.Body><p>Producto 2</p></Card.Body></Card></Col>
            <Col md={4}><Card><Card.Body><p>Producto 3</p></Card.Body></Card></Col>
          </Row>
        </Col>
      </Row>

      {/* Publicidad de marcas */}
      <Row className="mb-4">
        <Col>
          <h2>Trabajamos con las mejores marcas</h2>
          <p>[Logos de marcas aquí]</p>
        </Col>
      </Row>

      {/* Comentarios de clientes */}
        <Row className="mb-4">
          <Col>
            <h2>Lo que dicen nuestros clientes</h2>
            <p>"Excelente atención y profesionalismo!" - Cliente</p>
          </Col>
        </Row>

        {/* Profesionales */}
        <Container className="mb-4">
          <Row className="justify-content-md-center">
            <h2>Nuestro equipo</h2>
            <Col className="d-flex">
              <div className="m-3">
                <img src="" alt="Veterinario" className="rounded-circle" width={80} height={80} />
                <p>Dr. Pupo Gúzman</p>
              </div>
            </Col>
            <Col className="d-flex">
              <div className="m-3">
                <img src="" alt="Veterinario" className="rounded-circle" width={80} height={80} />
                <p>Dr. Pupo Gúzman</p>
              </div>
            </Col>
            <Col className="d-flex">
              <div className="m-3">
                <img src="" alt="Veterinario" className="rounded-circle" width={80} height={80} />
                <p>Dr. Pupo Gúzman</p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Planes mensuales */}
        <Row className="mb-4">
          <Col>
            <h2>Planes para tu mascota</h2>
            <Row>
              <Col md={4}><Card><Card.Body><h5>Primeros Pasos</h5><Button href="/planes">Ver más</Button></Card.Body></Card></Col>
              <Col md={4}><Card><Card.Body><h5>Madurando</h5><Button href="/planes">Ver más</Button></Card.Body></Card></Col>
              <Col md={4}><Card><Card.Body><h5>Adultos</h5><Button href="/planes">Ver más</Button></Card.Body></Card></Col>
            </Row>
          </Col>
        </Row>

        {/* Información del clima */}
        <Row className="mb-4">
          <Col>
            <h2>Clima actual</h2>
            <p>[Datos de API del clima]</p>
          </Col>
        </Row>
    </Container>
  );
};

export default Home;