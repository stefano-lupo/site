import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

import TeamMember from './TeamMember';

export default class OurTeam extends React.Component {

  componentDidMount() {

  }

  render() {
    
    return (
      <Container id="our-team">
        <h1>The AELF Team</h1>
        <p>Minim esse irure pariatur labore pariatur nulla amet ipsum non. Esse eiusmod mollit aliquip anim fugiat nostrud. Adipisicing in ea eu reprehenderit ullamco in aliqua aliquip aute. Exercitation aliqua minim laboris mollit laboris voluptate tempor cillum ullamco ad consectetur ipsum anim culpa. Minim aute aliqua laboris nostrud veniam consequat id veniam et. Sint ut do id ea consectetur ex esse veniam laboris ex.</p>
        <Row>
          {
            [...Array(8).keys()].map(ign => <TeamMember name="Stephen Haire" description="Coffee Maker" imgPath="https://media.licdn.com/dms/image/C4D03AQH5wicq8OQYAQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=o5CEeZmvcaiHDtsYjjKJZtagA9gAOb_SBGFgDh4qvMA"/>)
          }
        </Row>
      </Container>
    );
  }
}

