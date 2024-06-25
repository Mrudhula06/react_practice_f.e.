import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import nainital from './images/nainital.jpg';
import gaya from './images/gaya.jpg';
import himachal from './images/Himachal.jpg';
import kodaikanal from './images/kodaikanal.jpg';
import munnar from './images/munnar.jpg';
import wayanad from './images/Wayanad.jpg';

const Packages = () => {
  return (
    <Container id="packages" className="container"  style={{ marginTop: '90px' }}>
      <Row className="grid-container">
        <Col xs={12} sm={6} md={4} lg={4} className="grid-item mb-4">
          <Image src={nainital} alt="nainital" fluid />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Nainital - Raniketh Tour Package</h3>
              <p>Delhi, Nanital</p>
              <Button variant="primary">View details</Button>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className="grid-item mb-4">
          <Image src={gaya} alt="gaya" fluid />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Varanashi Bodh Gaya Tour Package</h3>
              <p>Varanashi Bodhgaya, Allahabad</p>
              <Button variant="primary">View details</Button>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className="grid-item mb-4">
          <Image src={himachal} alt="himachal" fluid />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Enchanting Himachal Tour</h3>
              <p>Delhi, Shimla, Manali</p>
              <Button variant="primary">View details</Button>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className="grid-item mb-4">
          <Image src={kodaikanal} alt="kodaikanal" fluid />
          <div className="overlay">
            <div className="overlay-content">
              <h3>South India Ecstasy Tour</h3>
              <p>Kodaikanal, Tamil Nadu</p>
              <Button variant="primary">View details</Button>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className="grid-item mb-4">
          <Image src={munnar} alt="munnar" fluid />
          <div className="overlay">
            <div className="overlay-content">
              <h3>God's Own Country Package</h3>
              <p>Kochin, Munnar</p>
              <Button variant="primary">View details</Button>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className="grid-item mb-4">
          <Image src={wayanad} alt="wayanad" fluid />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Escape to Wayanad</h3>
              <p>Wayanad</p>
              <Button variant="primary">View details</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Packages;
