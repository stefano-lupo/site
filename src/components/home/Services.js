import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';


import { PARTS_SUPPORT, ABOUT_US, TRANSACTIONS } from '../../constants/Routes';

const SERVICES = [
  {
    title: "Deal Structure",
    desc: "Irure dolore ex ad ut. Amet irure mollit laborum et dolor esse. Exercitation ipsum fugiat nisi commodo occaecat ex minim exercitation exercitation aliqua sit. Id voluptate incididunt cupidatat ad dolor minim minim excepteur eu.",
    page: ABOUT_US,
  },
  {
    title: "Technical Know-How",
    desc: "Irure dolore ex ad ut. Amet irure mollit laborum et dolor esse. Exercitation ipsum fugiat nisi commodo occaecat ex minim exercitation exercitation aliqua sit. Id voluptate incididunt cupidatat ad dolor minim minim excepteur eu",
    page: TRANSACTIONS,
  },
  {
    title: "Customization",
    desc: "Irure dolore ex ad ut. Amet irure mollit laborum et dolor esse. Exercitation ipsum fugiat nisi commodo occaecat ex minim exercitation exercitation aliqua sit. Id voluptate incididunt cupidatat ad dolor minim minim excepteur eu",
    page: ABOUT_US,
  },
  {
    title: "Parts Support",
    desc: "Irure dolore ex ad ut. Amet irure mollit laborum et dolor esse. Exercitation ipsum fugiat nisi commodo occaecat ex minim exercitation exercitation aliqua sit. Id voluptate incididunt cupidatat ad dolor minim minim excepteur eu",
    page: PARTS_SUPPORT
  },
]

const renderService = (service, i) => 
  <Col sm={{ span: 6 }} className="service">
    <h3>{service.title}</h3>
    <hr />
    <p>{service.desc}</p>
    <Link to={service.page}><Button block>Learn More</Button></Link>
  </Col>

export default () => 
  <Container fluid id="services">
    <Row className="services-wrapper">
      <Col className="image-bg">
        <h1>What Sets Us Apart</h1>
        <Container>
          <Row>
            {SERVICES.map((s, i) => renderService(s, i))}
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
