import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Col, Card } from 'react-bootstrap';

const AdminSidebar = () => {
    return (
        <Col sm={3} md={3} lg={2}>
            <Card className="p-3">
                <Card.Body>
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/admin" className="mb-2">
                                Dashboard
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/admin/pacientes" className="mb-2">
                                Pacientes
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/admin/turnos" className="mb-2">
                                Turnos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/admin/productos" className="mb-2">
                                Productos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="mb-2">
                                Cerrar sesión
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AdminSidebar;
