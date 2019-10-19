
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Row,
  Image,
} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

import MediaBackground from '../components/MediaBackground';

// import image from '../assets/img/faded.png';
import imageFadeBottom from '../assets/img/home/mission-statement.jpg';
import imageFaded from '../assets/img/faded.png'
import imageFadedMirror from '../assets/img/faded-mirror.png'
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';
import AlternatingColumns from '../components/AlternatingColumns';
import EyeCatcher from '../components/EyeCatcher';

const EYE_CATCHER_CONTENT = {
  title: <h1>Aircraft Solutions</h1>,
  body: 
    <p>
      Our group provides aircraft leasing and financing solutions to a variety of airlines across the globe. We lease aircraft to airlines across the globe, from well-established airlines to dynamic start-ups. We have extensive experience engineering financial structures that help airlines respond to growth opportunities or persevere through more challenging times. Given our flexibility, we can structure aircraft sale, leasing or financing that matches your fleet strategy. 
    </p>
}


const CONTENT = [
  {
    image: imageFaded,
    title: "Aircraft Fleet Solutions ",
    body: 
      <p>
        We provide turnkey solutions for airlines undergoing fleet modernization and transition. As new aircraft types are phased-in or out, we have the ability to implement cost effective and seamless transitions. Power by the hour or sale and leaseback transactions can provide airlines with significant flexibility while they focus on their core operations. 

      </p>
  },
  {
    image: imageFadedMirror,
    title: "Aircraft Trading",
    body: 
      <p>
        We are an active trader of commercial aircraft, both naked and those on long-term leases. Investors who acquire aircraft subject to lease from our platform know they will benefit from a combination of well-maintained aircraft on lease to good quality airlines under robust lease contracts. Trading aircraft provides significant investment flexibility and enables us to manage our risk. 
      </p>
  },
  {
    image: imageFaded,
    title: "Technical Support",
    body: 
      <p>
        Our experienced in-house technical team manage all aircraft and engine reviews, logistics, transitions, overhauls and reconfigurations associated with our portfolio. We have a hands-on technical approach which troubleshoots and solves all those unique obstacles associated with aircraft redeliveries. During operation, our technical team can assist airlines in extracting maximal engine value and help navigate any technical issues. 
      </p>
  },
]

export default () => (
  <section id="aircraft">
    <NavigationBar />
    <MediaBackground 
      overlay={
        <MediaBackgroundOverlay 
          title="Aircraft Solutions"
          body={<h2>A capital structure that provides investment flexibility</h2>} />}
      image={imageFadeBottom} />
    <Container fluid>
      <EyeCatcher content={EYE_CATCHER_CONTENT} />
      <AlternatingColumns rows={CONTENT} />
    </Container>
  </section>
);
