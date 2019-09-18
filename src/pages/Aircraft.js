
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
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
          body={<h2>Need Subtitle</h2>} />}
      image={image} />
    <Container>
    <h3>Our experience and innovative approach creates value driver partnerships with airlines across the globe.</h3>

    <h3>Our capital structure provides investment flexibility</h3>
    <ul>
      <li>
      We are a self funded aircraft leasing company, allowing us to pursue a flexible and creative strategy
      </li>
      <li>
      Our entirely unencumbered asset base allows us to move deals quickly and adapt to changing market conditions
      </li>
    </ul>

    <h3>Fleet Development</h3>
    <ul>
      <li>
      We provide turn-key solutions for airlines undergoing fleet modernization and transition
      </li>
      <li>
      As new aircraft types are phased in and out, we can implement cost effective and seamless fleet transitions
      </li>
      <li>
      Power by the hour and sale and leasebook transactions can provide airlines with significant flexibility while they focus on their operations.
      </li>
    </ul>

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
