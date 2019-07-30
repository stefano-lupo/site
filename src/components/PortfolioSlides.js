import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container,
  Carousel,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap';

import { TRANSACTIONS } from '../constants/Routes';

import A330 from '../assets/img/planes-slideshow/A330-200.jpg';
import Boeing from '../assets/img/planes-slideshow/boeing-747-100.jpg';
import Embraer from '../assets/img/planes-slideshow/embraer-e175-e2.jpg';

export default () => (
  <section id="portfolio">
    <Container>
      <h1>Some of our Aircraft</h1>
      <p>Commodo minim id nostrud commodo enim aliqua ea excepteur magna nulla et quis laboris ea. Eu occaecat eu non excepteur. In mollit cillum duis eiusmod elit officia non labore tempor. Commodo adipisicing Lorem anim eiusmod ad et. Lorem ullamco et velit reprehenderit non occaecat pariatur sunt non nostrud excepteur ullamco eiusmod.</p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Boeing}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Boeing 747 100</h3>
            <p>It's a white plane!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Embraer}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Emraer E175-E2</h3>
            <p>Contains several luxury windows.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row className="mt-1">
        <Col>
          <Link className="no-underline" to={TRANSACTIONS}>
            <Button size="lg" block>View Full Portfolio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
);
