import React from 'react';
import { Carousel, Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dubai from './images/dubai.jpg';
import southKorea from './images/south korea.jpg';
import singapore from './images/singapore.jpeg';
import maldives from './images/maldives.webp';

const Home = () => {
  return (
    <Container style={{ marginTop: '90px', width: '90%' }}>
      <Carousel>
        <Carousel.Item>
          <Card style={{ height: '650px', position: 'relative' }}>
            <Card.Img variant="top" src={dubai} alt="Dubai" />
            <Card.Body style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>
              <Card.Title>Dubai</Card.Title>
              <Card.Text>
                Explore the beauty of Dubai with amazing tours and attractions.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ height: '650px', position: 'relative' }}>
            <Card.Img variant="top" src={southKorea} alt="South Korea" />
            <Card.Body style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>
              <Card.Title>South Korea</Card.Title>
              <Card.Text>
                Discover the culture and traditions of South Korea.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ height: '650px', position: 'relative' }}>
            <Card.Img variant="top" src={singapore} alt="Singapore" />
            <Card.Body style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>
              <Card.Title>Singapore</Card.Title>
              <Card.Text>
                Experience the modernity and green spaces of Singapore.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ height: '650px', position: 'relative' }}>
            <Card.Img variant="top" src={maldives} alt="Maldives" />
            <Card.Body style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff' }}>
              <Card.Title>Maldives</Card.Title>
              <Card.Text>
                Relax on the beautiful beaches of the Maldives.
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
