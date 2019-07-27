import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Image,
} from 'react-bootstrap';

import AboutUs from '../components/AboutUs';
import OurTeam from '../components/team/OurTeam';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <AboutUs />
        <OurTeam />
      </div>
    )
  }
}
