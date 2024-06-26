// Login.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/login', { email, password });
      console.log('Login successful:', response.data);
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard'); // Redirect to a dashboard or other protected route
    } catch (error) {
      console.error('Login error:', error.response.data.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="login-form" style={{ maxWidth: '400px' }}>
        <h1 className="login-heading">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form>
        <p className="register-link mt-3">
          Don't have an Account? <Link to="/register">Register</Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
