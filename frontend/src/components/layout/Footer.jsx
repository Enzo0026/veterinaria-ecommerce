import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


function Footer (){
    return (
    <footer className="bg-secondary text-white">
        <Container>
            <Row>
                <Col xs={12} md={4} className="mb-3">
                    <div className="mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faFacebook} className="me-2" />Facebook
                        </a>
                    </div>                   
                    <div className="mt-2">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faInstagram} className="me-2" />Instagram
                        </a>
                    </div>                   
                    <div className="mt-2">
                        <a href="https://.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faWhatsapp} className="me-2" />Whatsapp
                        </a>
                    </div>                   
                </Col>
                <Col xs={12} md={4} className="text-center">
                    <h5>Veterinaria</h5>
                    <p>&copy; {new Date().getFullYear()} Veterinaria. Todos los derechos reservados.</p>
                </Col>
                <Col xs={12} md= {4} className="text-end">
                    <Nav>
                        <Nav.Link href="/about" className="text-white">About Us</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;