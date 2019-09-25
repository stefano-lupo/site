import React from 'react';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

import Render737 from '../../assets/img/plane-renders/737-400.png';
import RenderA340 from '../../assets/img/plane-renders/a340-300.png';
import RenderCRJ1000 from '../../assets/img/plane-renders/crj-1000.png';



export default () =>
<Container fluid id="transaction-media-overlay">
  <Row className="transaction-row">
    <Col className="transaction-col" sm={6}><Image fluid src={Render737} /></Col>
    <Col className="transaction-col" sm={6}><h1>30 B737</h1></Col>
  </Row>
  <Row className="transaction-row">
    <Col className="transaction-col" sm={6}><Image fluid src={RenderA340} /></Col>
    <Col className="transaction-col" sm={6}><h1>6 A340</h1></Col>
  </Row>
  <Row className="transaction-row">
    <Col className="transaction-col" sm={6}><Image fluid src={RenderCRJ1000} /></Col>
    <Col className="transaction-col" sm={6}><h1>5 CRJ1000</h1></Col>
  </Row>  
  
</Container>