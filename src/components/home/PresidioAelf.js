import React from 'react';

import {
  Container,
  Row,
  Col,
  Card,
  Image,
  CardDeck
} from 'react-bootstrap';

import PresidioLogo from '../../assets/img/logos/presidio-black-logo.png';
import AelfLogo from '../../assets/img/logos/aelf-black-logo.png';
import JoinedLogo from '../../assets/img/logos/joined-logos.png';

const PresidioAelf = () => (
  <section id="presidio-aelf" className="container">
    <h1 className="text-center">A Joint Venture</h1>
      <Row>
        {/* <Col className="d-flex align-items-stretch"> */}
        <Col>
        <CardDeck>
          <Card>
            {/* <Image fluid src={PresidioLogo} /> */}
            <Card.Body>
              <Card.Title>Fleet Financing</Card.Title>
              <Card.Text>
                Aircraft Engine Lease Finance Inc. is a privately held commercial aircraft and engine leasing company based in Puerto Rico.
              </Card.Text>
            </Card.Body>
          </Card>
        {/* </Col> */}
        {/* <Col className="d-flex align-items-stretch"> */}
          <Card>
            {/* <Image fluid src={AelfLogo} /> */}
            <Card.Body>
              <Card.Title>Lease Management</Card.Title>
              <Card.Text>
                Presidio Aircraft Leasing is the group's exclusive marketing partner based in Chicago, USA. Presidio provides AELF with acquisition, re-marketing and advisory services.
              </Card.Text>
            </Card.Body>
          </Card>
        {/* </Col> */}
        </CardDeck>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            {/* <Image src={JoinedLogo} /> */}
            <Card.Body>
              <Card.Title>Partnership</Card.Title>
              <Card.Text>
                Together, AELF and Presidio provide customized fleet financing solutions to airlines around the world. The group maintains a professional team of in-house aircraft leasing experts, focused on ensuring aircraft investments are secure and professionally managed
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  </section>
);


export default PresidioAelf;
