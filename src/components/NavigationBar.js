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

import { HOME, AIRCRAFT, ENGINES, TRANSACTIONS, PARTS_SUPPORT, CONTACT } from '../constants/Routes';
import PresidioLogo from '../assets/img/logos/presidio-logo.png';
import AelfLogo from '../assets/img/logos/aelf-logo.png';
import PresidioLogoNavy from '../assets/img/logos/presidio-logo-navy.png';
import AelfLogoNavy from '../assets/img/logos/aelf-logo-navy.png';


const NAVBAR_DEFAULT_CLASS_NAME = "fixed-top";
const MASTHEAD_UNSCROLLED_CLASS_NAME = `${NAVBAR_DEFAULT_CLASS_NAME} navbar-masthead`;

const LOGO_HEIGHT = 75;

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      navbarClassName: this.getNavbarClassName(props.isMastheadPage)
    });

    this.updateNavbarClassState = this.updateNavbarClassState.bind(this);
  }

  componentDidMount() {
    if (this.props.isMastheadPage) {
      console.log("Adding scroll listener for masthead page")
      window.addEventListener('scroll', this.updateNavbarClassState)
    }
  }

  getNavbarClassName(isMastHeadPage) {
    const isAtTopOfPage = window.pageYOffset <= 0;
    return isMastHeadPage && isAtTopOfPage ? 
      MASTHEAD_UNSCROLLED_CLASS_NAME : 
      NAVBAR_DEFAULT_CLASS_NAME
  }

  updateNavbarClassState() {
    this.setState({
      navbarClassName: this.getNavbarClassName(this.props.isMastheadPage)
    });
  }

  render() {
    const { navbarClassName } = this.state;

    return (
      <Navbar collapseOnSelect className={navbarClassName} expand="lg">
        <LinkContainer to={HOME}>
          {/* <Navbar.Brand href="/">AELF Inc.</Navbar.Brand> */}
          <Navbar.Brand>
            <Image
              alt="Presidio Logo"
              src={PresidioLogoNavy}
              height={LOGO_HEIGHT}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          <LinkContainer to={HOME}>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to={AIRCRAFT}>
              <Nav.Link>Aircraft</Nav.Link>
            </LinkContainer>
            <LinkContainer to={ENGINES}>
              <Nav.Link>Engines</Nav.Link>
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
          <LinkContainer to={HOME}>
            <Navbar.Brand>
              <Image
                alt="AELF Logo"
                src={AelfLogoNavy}
                height={LOGO_HEIGHT}
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </LinkContainer>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationBar.propTypes = {
  isMastheadPage: PropTypes.bool,
}

NavigationBar.defaultProps = {
  isMastheadPage: true
}
