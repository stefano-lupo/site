import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Image,
  Row
} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

import MediaBackground from '../components/MediaBackground';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';
import AlternatingColumns from '../components/AlternatingColumns';
import EyeCatcher from '../components/EyeCatcher';


import video from '../assets/video/engine.mp4';
import poster from '../assets/img/posters/engine-poster.jpg';
import EngineClose from '../assets/img/engines/engine-close.jpg';

const EYE_CATCHER_CONTENT = {
  body: <p>Occaecat anim proident in sint irure commodo eiusmod deserunt cupidatat. Dolore exercitation irure ad qui pariatur ea sint aliquip non aliquip quis. Enim cillum commodo velit nulla magna excepteur Lorem cupidatat duis mollit. Sint labore et culpa officia et aute nisi ut commodo officia tempor. Sint ea amet est voluptate.</p>
}

const CONTENT = [
  {
    image: EngineClose,
    title: "Engine Solutions",
    body: 
    <div>
      <p>
        We offer a comprehensive range of individually tailored financing and leasing based products including:
      </p>
      <ul>
        <li>Engine acquisitions and disposals</li>
        <li>Sale and leasebacks</li>
        <li>AOG support</li>
        <li>Spare engine support</li>
        <li>Green-time and Power by the hour lease structures</li>
      </ul>
    </div>
  },
  {
    image: EngineClose,
    title: "Engine Sales, Leasing, Exchange and Financing",
    body: 
      <p>
      	We buy, lease and finance a variety of engines to power today’s commercial aircraft. We tailor transaction structures to suit specific fleet goals. We specialize in the provision of flexible short and long-term engine support packages. 
      </p>
  }
]



export default () => (
  <section id="engines">
    <NavigationBar isMastheadPage={true} />
    <MediaBackground 
      overlay={
        <MediaBackgroundOverlay 
          title={"Engine Solutions"} 
          body={<h2>Sales, Leasing, Exchange and Financing</h2>} 
        />
      }
      video={video} 
      image={poster} />

    <Container fluid>
      <EyeCatcher content={EYE_CATCHER_CONTENT} />
      <AlternatingColumns rows={CONTENT} />
    </Container>
  </section>
);
