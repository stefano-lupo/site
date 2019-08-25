import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => 
  <section id="copyright" className="row">
    <Col className="d-flex justify-content-around">
      <p><FontAwesomeIcon icon="copyright" /> AELF Incorporated {new Date().getFullYear()}</p>
      <p>Designed by <a href="http://www.stefanolupo.com">Stefano Lupo</a></p>
    </Col>

  </section>