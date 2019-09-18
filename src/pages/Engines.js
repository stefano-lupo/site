import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Image,
  Row
} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

import EyeCatcher from '../components/EyeCatcher';
import MediaBackground from '../components/MediaBackground';

import video from '../assets/video/engine.mp4';
import poster from '../assets/img/posters/engine-poster.jpg';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';


export default () => (
  <section id="engines">
    <NavigationBar isMastheadPage={true} />
    <MediaBackground 
      overlay={
        <MediaBackgroundOverlay 
          title={"Engine Solutions"} 
          body={<h2>Sales, Leasing, Exchange and Financing</h2>} />}
      video={video} 
      image={poster} />

    <Container>
      <Row>
        <Col>
        <EyeCatcher 
          title="We buy, lease and finance a variety of engines to power today's commercial aircraft" 
          subtitle="We can tailor transaction structures to suit specific fleet goals" />
          <h3>
            Our engine solutions can help
          </h3>
          <ul>
            <li>Provide flexibility during unscheduled maintenance</li>
            <li>Spare engine support</li>
            <li>Provide technical engine support</li>
            <li>hort and long term engine leasing</li>
            <li>Green-Time (????)</li>
            <li>PBST (????)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
);
