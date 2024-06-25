import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import about1 from './images/About1.png';
import about2 from './images/about2.jpg';

const About = () => {
  return (
    <Container id="about" style={{ marginTop: '90px' }}>
      <h1 style={{ fontWeight: 'bolder' }}>About Us</h1>
      <Row style={{ marginBottom: '20px' }}>
        <Col>
          <h2>Mission</h2>
          <p>
            Our mission is to provide unforgettable travel experiences that exceed
            our customers' expectations.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        <Col>
          <h2>Vision</h2>
          <p>
            Our vision is to become the leading travel agency known for innovative
            and personalized travel solutions.
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        <Col>
          <h2>Motto</h2>
          <p>Travel with joy, explore with passion.</p>
        </Col>
      </Row>
      <Row className="about-images" style={{ marginBottom: '20px' }}>
        <Col>
          <Image src={about1} alt="About Image 1" fluid />
        </Col>
        <Col>
          <Image src={about2} alt="About Image 2" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
