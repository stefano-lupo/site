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
      <Navbar bg="dark" variant="dark">
        <LinkContainer to={HOME}>
          <Navbar.Brand>
            <Image
              src={AelfLogo}
              className="d-inline-block align-top"
              height="50"
            />
          </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to={HOME}>
          <Navbar.Brand>
            <Image
              src={PresidioLogo}
              className="d-inline-block align-top"
              height="50"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <LinkContainer to={PORTFOLIO}>
            <Nav.Link>Portfolio</Nav.Link>
          </LinkContainer>
          <LinkContainer to={CONTACT}>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
