import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Ensure axios is imported

const Register = () => {
  const[names,setNames] = useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[phoneNumber,setPhoneNumber]=useState("");
  const[address,setAddress]=useState("");
  const[dob,setDob]=useState("");

  const handlePost = () => {
    axios.post("http://localhost:3002/users",{names,email, password, phoneNumber, address, dob})
    .then(() => {
      alert("Data is stored successfully");
      setNames("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setAddress("");
      setDob("");

    })
    
    .catch((e) => { console.log(`Error: ${e}`) });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="register-form" style={{ maxWidth: '400px', width: '100%' , marginTop:"70px"}}>
        <h1 className="register-heading text-center mb-4">Register</h1>
        <Form onSubmit={handlePost}>
          <Form.Group controlId="formBasicName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={names} onChange={(e)=>setNames(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}   required />
          </Form.Group>

          <Form.Group controlId="formBasicPhoneNumber" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}  required />
          </Form.Group>

          <Form.Group controlId="formBasicAddress" className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(e)=>setAddress(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicDateOfBirth" className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" value={dob} onChange={(e)=>setDob(e.target.value)}  required />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
        </Form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
