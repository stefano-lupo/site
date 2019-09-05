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

const NAVBAR_DEFAULT_CLASS_NAME = "fixed-top";
const MASTHEAD_UNSCROLLED_CLASS_NAME = `${NAVBAR_DEFAULT_CLASS_NAME} navbar-masthead`;

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = ({
      navbarClassName: this.getNavbarClassName()
    });
    this.updateNavbarClassState = this.updateNavbarClassState.bind(this);
  }

  componentDidMount() {
    if (this.props.isMastheadPage) {
      window.addEventListener('scroll', this.updateNavbarClassState)
    }
  }

  getNavbarClassName() {
    return  window.pageYOffset <= 0 ? MASTHEAD_UNSCROLLED_CLASS_NAME : NAVBAR_DEFAULT_CLASS_NAME;
  }

  updateNavbarClassState() {
    this.setState({
      navbarClassName: this.getNavbarClassName()
    });
  }

  render() {
    const { navbarClassName } = this.state;
    return (
      <Navbar collapseOnSelect className={navbarClassName} expand="lg">
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

NavigationBar.propTypes = {
  isMastheadPage: PropTypes.bool,
}

NavigationBar.defaultProps = {
  isMastheadPage: false
}
