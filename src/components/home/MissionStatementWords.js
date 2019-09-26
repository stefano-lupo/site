import React from 'react';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-reveal';

export default () => 
  <Container fluid id="mission-statement-words">
    <Row>
      <Col md={6}>
      <div className="mission-statement-wrapper">
        <h2>Mission Statement</h2>
        <p>We employ creative solutions, relationships, technical competence and professional excellence while taking risks that we understand and know how to navigate.</p>
        <p>That's our mission.</p>
      </div>
      </Col>
    </Row>
  </Container>
