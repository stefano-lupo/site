import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import  { LinkContainer } from 'react-router-bootstrap';

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

import AelfLogo from '../assets/img/logos/aelf-logo.svg';
import PresidioLogo from '../assets/img/logos/presidio-logo.png';
import { HOME, PORTFOLIO, CONTACT } from '../constants/Routes';

export default class NavigationBar extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Navbar variant="dark">
        <Nav className="mr-auto">
          <LinkContainer to={PORTFOLIO}>
            <Nav.Link>Portfolio</Nav.Link>
          </LinkContainer>
          <LinkContainer to={CONTACT}>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
