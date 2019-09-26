
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import MediaBackground from '../components/MediaBackground';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';
import image from '../assets/img/header/parts-support.jpg';
import AlternatingColumns from '../components/AlternatingColumns';
import EyeCatcher from '../components/EyeCatcher';

const EYE_CATCHER_CONTENT = {
  body:   
    <p>
      Our group is an active and experienced buyer and seller in the aircraft parts business. Through our services, airlines can gain access to an extensive inventory of aircraft parts and a truly global vendor network to source requirements for all commercial aircraft. 
    </p>
}

const CONTENT = [
  {
    image: image,
    title: "Parts Sales",
    body: 
      <p>
        We maintain an extensive Miami based warehouse of our own parts inventory, available to ship on demand to meet your scheduled or AOG requirement. Our vast parts inventory is built through aircraft tear down and vendor market access. Our extensive pricing knowledge drives down cost and secures residual value. We have the ability to provide complete supply chain solutions.  
      </p>
  },
  {
    image: image,
    title: "Acquisition",
    body: 
      <p>
        Our skilled acquisition group has the ability to source all parts requirements and our buying power allows us to negotiate optimal pricing and seamless delivery under all circumstances. We have built relationships with OEMs and providers of overhauled and serviceable parts. Our experience in parts procurement for all commercial aircraft enables us to provide invaluable consultations and advice on even the toughest parts requests. If a part is not in our inventory, we’ll source it!

      </p>
  },
]

const overlayBody = () => 
  <div>
    <p>Our group is an active and experience buyer and seller in the aircraft parts business. <br />Gain access to an extensive inventory of aircraft parts and a truely global vendor network to source assets for all commercial aircraft
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
    <Container fluid>
      <EyeCatcher content={EYE_CATCHER_CONTENT} />
      <AlternatingColumns rows={CONTENT} />
      <br /><br />
      <Row className="mb-5">
        <Col className="text-center">
          <h2>Our Parts Department</h2>
          <p>For all your parts requirements, please contact Joe Sitkowski - <a href="mailto:sitkowski@presidioaircraftleasing.com" _target="blank">sitkowski@presidioaircraftleasing.com</a></p>
        </Col>
      </Row>
    </Container>
  </section>
);
