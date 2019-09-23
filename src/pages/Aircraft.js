
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Row,
  Image,
} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

import MediaBackground from '../components/MediaBackground';

import image from '../assets/img/header/airplane.jpg';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';

export default () => (
  <section id="aircraft">
    <NavigationBar />
    <MediaBackground 
      overlay={
        <MediaBackgroundOverlay 
          title="Aircraft Solutions"
          body={<h2>A capital structure that provides investment flexibility</h2>} />}
      image={image} />
    <Container>
        
      <h4>Our experience and innovative approach creates value driver partnerships with airlines across the globe.
        We are a self funded aircraft leasing company, allowing us to pursue a flexible and creative strategy

        Our entirely unencumbered asset base allows us to move deals quickly and adapt to changing market conditions
        </h4>

    <Row>
      <Col>
      </Col>
      <Col>
      <h3>Fleet Development</h3>
      <p>
        We provide turn-key solutions for airlines undergoing fleet modernization and transition
        As new aircraft types are phased in and out, we can implement cost effective and seamless fleet transitions

      Power by the hour and sale and leasebook transactions can provide airlines with significant flexibility while they focus on their operations.

      </p>
      </Col>
    </Row>
    

    <h3>
      Sales, Leasing & Financing
    </h3>
    <ul>
      <li>
        Our team has extensive experience engineering financial structures that help airlines persevere through challenging times or respond to growth oppurtunities.
      </li>
      <li>
        We can structure a sale, leasing or finance solution that matches your fleet strategy.
      </li>
    </ul>
  </Container>
  </section>
);
