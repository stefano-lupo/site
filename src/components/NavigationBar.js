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

import AelfLogo from '../assets/img/logos/aelf-logo.svg';
import PresidioLogo from '../assets/img/logos/presidio-logo.png';
import { HOME, TRANSACTIONS, CONTACT } from '../constants/Routes';

export default class NavigationBar extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Navbar fluid collapseOnSelect className="fixed-top" expand="lg">
        <LinkContainer to={HOME}>
          <Navbar.Brand href="#home">AELF Inc.</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <LinkContainer to={TRANSACTIONS}>
              <Nav.Link>Transactions</Nav.Link>
            </LinkContainer>
            <LinkContainer to={HOME}>
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to={CONTACT}>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav.Link>
            <a target="_blank" href="https://www.facebook.com/presidioaircraft">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
          </Nav.Link>
          <Nav.Link>
            <a target="_blank" href="https://www.facebook.com/presidioaircraft">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </Nav.Link>
          <Nav.Link>
            <a target="_blank" href="https://www.facebook.com/presidioaircraft">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


// <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      //   <div className="container-fluid">
      //     <a className="navbar-brand js-scroll-trigger" href="#page-top">AELF Inc.</a>
      //     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      //       Menu
      //       <i className="fas fa-bars"></i>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarResponsive">
      //       <ul className="navbar-nav ml-auto">
      //         <li className="nav-item">
      //           <a className="nav-link js-scroll-trigger" href="#about">About</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link js-scroll-trigger" href="#signup">Contact</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>