
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Image,
} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import MediaBackground from '../components/MediaBackground';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';
import image from '../assets/img/header/parts-support.jpg';

const overlayBody = () => 
  <div>
    <p>Our group is an active and experience buyer and seller in the aircraft parts business.</p>
    <p>Gain access to an extensive inventory of aircraft parts and a truely global vendor network to source assets for all commercial aircraft
    </p>
  </div>

export default () => (
  <section id="parts-support">
    <NavigationBar />
    <MediaBackground
      overlay={
        <MediaBackgroundOverlay 
          title={"Commercial Aircraft Parts Support"}
          body={overlayBody()} />}  
      image={image} />
    <Container>
      <h2>Parts Sales</h2>
      <p>We maintain an extensive Miami-based warehouse of our own parts inventory, available to ship on demand to meet your scheduled or AOG(????) requirement. Our vast parts inventory is built through aircraft tear down and vendor marketplace access. </p>
      <p>Our extensive pricing knowledge drives down cost and secures residual value - we have the ability to provide complete supply chain solutions.</p>
      <h2>Acquisition</h2>
      <p>
        Our skilled acquisition group has the ability to source all parts requirements and our buying  power allows us to negotiate optimal pricing and seamless delivery under any circumstance. We have built relationships with OEMs and providers of overhealed(????) and serviceable parts. 
        Our experience in parts procurement for all commercial aircraft enables us to provide invaluable consultations and advice on even the toughest parts requests.
      </p>

      <h4>If a part is not in our inventory, we'll source it!</h4>
      <br/>
      
      <h2>Our Parts Department</h2>
      <p>For all your parts requirements, please contact Joe Sitkowski - <a href="mailto:sitkowski@presidioaircraftleasing.com" _target="blank">sitkowski@presidioaircraftleasing.com</a></p>
    </Container>
  </section>
);
