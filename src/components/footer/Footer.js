import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Partners from './Partners';
import Copyright from './Copyright';
import ContactDepartments from './ContactDepartments';
import GoogleMapPresidio from './GoogleMapPresidio';
import ChicagoSkyline from '../../assets/img/chicago-skyline.png';

export default () => (
  <footer className="container-fluid">
    <div className="main-footer">
      <Row className="text-center">
        <Col sm={6} md={4}>
          <h3>Our Partners</h3>
          <hr />
          <Partners />
        </Col>
        <Col sm={6} md={{span: 4, offset: 4}}>
          <h3>Get In Touch</h3>
          <hr />
          <ContactDepartments />
        </Col>
        {/* <Col sm={12} md={{ span: 4, offset: 1, order: 2 }}>
          <h3>Find Us!</h3>
          <hr />
          <GoogleMapPresidio />
        </Col> */}
      </Row>
    </div>
    <Copyright />
  </footer>
);
