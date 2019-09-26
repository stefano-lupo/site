import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import OurTeam from '../components/team/OurTeam';
import NavigationBar from '../components/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediaBackground from '../components/MediaBackground';

import image from '../assets/img/header/header-standin-wing.jpg';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';
import EyeCatcher from '../components/EyeCatcher';

const EYE_CATCHER_CONTENT = {
  body: 
    <p>
      Presidio and AELF are split across 3 continents....... <br />
      For any general queries please contact  <a href="mailto:info@presidioaircraftleasing.com">info@presidioaircraftleasing.com</a>
    </p>
}
 

const OVERLAY_BODY = 
  <div>
    <p>For any general queries please contact </p>
    <p> 
      <a href="mailto:info@presidioaircraftleasing.com">info@presidioaircraftleasing.com</a>
    </p>
  </div>


export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact-us">
        <NavigationBar isMastheadPage={false}/>
        <MediaBackground
          overlay={
            <MediaBackgroundOverlay
              title="Get in touch"
              body={OVERLAY_BODY}
            />
          } 
          image={image}
        />
        <Container>
          <EyeCatcher content={EYE_CATCHER_CONTENT} />
          <Row className="text-center locations">
            <Col >
              <a target="_blank" href="https://goo.gl/maps/4wdogPTGcMJd1TTW7">
                <FontAwesomeIcon icon="location-arrow" size="3x" />
              </a>
              <h2>Puerto Rico</h2>
              <h3>AELF Inc.</h3>
              <hr />
              <div className="address">
                <p>City View Plaza II</p>
                <p>48 Carr 165 Ste 1120 </p>
                <p>Guaynabo</p>
                <p>PR 00968</p>
              </div>
              {/* <hr /> */}
            </Col>
            <Col>
              <a target="_blank" href="https://goo.gl/maps/VPxDz4DJ7NfUr9M66">
                <FontAwesomeIcon icon="location-arrow" size="3x" />
              </a>
              <h2>Chicago</h2>
              <h3>Presidio</h3>
              <hr />
              <div className="address">
                <p>180 N. Stetson Avenue</p>
                <p>Suite 3600</p>
                <p>Chicago</p>
                <p>IL 60601</p>
              </div>
              {/* <hr /> */}
              <p>Sales / Leasing: +1 (312) 690 4696</p>
              <p>Parts Support: +1 (312) 858 1472</p>
              <p>Corporate Office: +1 (312) 445 9095</p>
            </Col>
            <Col >
              <a target="_blank" href="https://goo.gl/maps/j4o72smXuCVWCoXA6">
                <FontAwesomeIcon icon="location-arrow" size="3x" />
              </a>
              <h2>Miami Office</h2>
              <h3>Presidio Inc.</h3>
              <hr />
              <div className="address">
                <p>8406 NW 17th Avenue</p>
                <p>Doral </p>
                <p>Miami</p>
                <p>FL 33126</p>
              </div>
              {/* <hr /> */}
              <p>Sales / Leasing: +1 (305) 517 3004</p>
            </Col>
          </Row>
        </Container>
        {/* <OurTeam /> */}
      </section>
    )
  }
}
