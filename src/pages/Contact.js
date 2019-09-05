import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Image,
} from 'react-bootstrap';
import OurTeam from '../components/team/OurTeam';
import NavigationBar from '../components/NavigationBar';


export default class Contact extends React.Component {
  render() {
    return (
      <section>
        <NavigationBar />
        <OurTeam />
      </section>
    )
  }
}
