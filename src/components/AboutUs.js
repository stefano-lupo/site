import React from 'react';

import {
  Container,
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap';

import PresidioLogo from '../assets/img/logos/presidio-black-logo.png';
import AelfLogo from '../assets/img/logos/aelf-black-logo.png';

const AboutUs = () => (
  <section id="about-us">
    <Container>
      <Row>
        <Col className="d-flex align-items-stretch">
          <Card>
            <Image fluid src={PresidioLogo} />
            <Card.Body>
              <Card.Title>Fleet Financing</Card.Title>
              <Card.Text>
                Aircraft Engine Lease Finance Inc. is a privately held commercial aircraft and engine leasing company based in Puerto Rico. AELF provides customised fleet financing solutions to airlines around the world.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex align-items-stretch">
          <Card>
            <Image fluid src={AelfLogo} />
            <Card.Body>
              <Card.Title>Lease Management</Card.Title>
              <Card.Text>
                Presidio Aircraft Leasing is based in Chicago, USA and is AELF’s exclusive lease management and marketing partner. We are dedicated to assisting airlines with all aspects of aircraft transitions, including managing surplus capacity through re-marketing and assisting with acquiring additional capacity, as well as its in-house parts procurement division to provide support during aircraft transitions and downtime.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Image src={PresidioLogo} />
            <Card.Body>
              <Card.Title>Partnership</Card.Title>
              <Card.Text>
                Presidio Aircraft Leasing provides acquisition, re-marketing, advisory and lease management services to AELF. The company maintains a professional team of in-house aircraft leasing experts, focused on ensuring aircraft investments are secure and appropriately managed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);


export default AboutUs;
