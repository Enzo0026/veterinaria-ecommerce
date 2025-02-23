import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ show, handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e)=> {
        e.preventDefault();
        const adminUser = getAdmin();
    

    if (!adminUser) {
        setError('No hay usuario registrado');
        setTimeout(()=>{
            navigate('/');
        }, 6000);
        return;
    }

    if (email === adminUser.email && password === adminUser.password) {
        localStorage.setItem("authenticatedUser", JSON.stringify(adminUser));
        alert('Login exitoso, bienvenido Admin')
        setError('');
        handleClose('');
        navigate('/admin')
    } else {
        setError('Email o contraseña incorrectos')
    }
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="example@gmail.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Form.Group>

                    <Button variant="warning m-3" type="submit">
                        Login
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
