import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { HOME, TRANSACTIONS, PARTS_SUPPORT, CONTACT, ABOUT_US } from '../constants/Routes';

export default class NavigationBar extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Navbar collapseOnSelect className="fixed-top" expand="lg">
        <LinkContainer to={HOME}>
          <Navbar.Brand href="/">AELF Inc.</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <LinkContainer to={ABOUT_US}>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to={TRANSACTIONS}>
              <Nav.Link>Transactions</Nav.Link>
            </LinkContainer>
            <LinkContainer to={PARTS_SUPPORT}>
              <Nav.Link>Parts Support</Nav.Link>
            </LinkContainer>
            <LinkContainer to={CONTACT}>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav.Link href="https://www.facebook.com/presidioaircraft">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </Nav.Link>
          <Nav.Link href="https://twitter.com/PresidioAir">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/company/presidio-aircraft-leasing">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
