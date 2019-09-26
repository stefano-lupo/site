import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Image,
  Carousel,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CONTACT } from '../../constants/Routes';
import Partners from './Partners';

const FACEBOOK_URL = 'https://www.facebook.com/presidioaircraft';
const LINKEDIN_URL = 'https://www.linkedin.com/company/presidio-aircraft-leasing';
const TWITTER_URL = 'https://twitter.com/PresidioAir';

const firstColCofig = {
  sm: 6,
  md: 4
};

const secondColConfig = {
  sm: 6,
  md: {
    span: 4,
    offset: 4
  }
}

const socialMediaIconLink = (url, icon, text) => 
  <div className="social-icon-wrapper">
     <p>
        <a target="_blank" href={url}>
          <FontAwesomeIcon className="icon-margin" icon={icon} />
          {text}
        </a>
      </p>
  </div>

const contactIconLink = (to, icon, text) => 
  <div className="contact-icon-wrapper">
    <p>
        <Link to={to}>
          {text}
          <FontAwesomeIcon className="icon-margin" icon={icon} />
        </Link>
 
      </p>
  </div>


export default () => {
  return (
    <footer>
      <Container >
        <Row className="main-footer">
          <Col md={4}>
            <h3>Contact Us</h3>
            <hr />
            {contactIconLink(CONTACT, "user-tie", "Corporate Contacts")}
            {contactIconLink(CONTACT, "tools", "Parts Support")}
            {contactIconLink(CONTACT, "handshake", "Sales Contacts")}
          </Col>
          <Col md={4} className="text-center">
            <h3>Our Partners</h3>
            <hr />
            <Partners />
          </Col>
          <Col md={4} className="text-right">
            <h3>Get in Touch</h3>
            <hr />
            {socialMediaIconLink(FACEBOOK_URL, ['fab', 'facebook'], "Presidio Aircraft")}
            {socialMediaIconLink(TWITTER_URL, ['fab', 'twitter'], "Presidio Air")}
            {socialMediaIconLink(LINKEDIN_URL, ['fab', 'linkedin'], "Presidio Aircraft Leasing")}
          </Col>
        </Row>
        <Row id="copyright">
            <Col>
              <p><FontAwesomeIcon icon="copyright" /> AELF Incorporated {new Date().getFullYear()} - 
              Designed by <a href="http://www.stefanolupo.com">Stefano Lupo</a></p>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}
