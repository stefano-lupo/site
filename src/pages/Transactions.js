import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import TransactionDetail from '../components/transactions/TransactionDetail';
import NavigationBar from '../components/NavigationBar';
import MediaBackground from '../components/MediaBackground';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';

import A330 from '../assets/img/transactions/planes/airbus-a330.jpeg';
import AirTransat from '../assets/img/transactions/planes/air-transat.jpeg';
import AtlasGlobal from '../assets/img/transactions/planes/atlas-global.jpeg';
import SurinamAirways from '../assets/img/transactions/planes/surinam-airways.jpeg';

import AirbusLogo from '../assets/img/partner-logos/airbus.png';
import AirTransatLogo from '../assets/img/partner-logos/air-transat.png';
import SurinamAirwaysLogo from '../assets/img/partner-logos/surinam-airways.png';

import TRANSACTION_DATA from '../data/TransactionData';


import image from '../assets/img/header/airplane-wing-bw.jpg';

const overlayBody = () => 
  <div>
    <p>Smaller bit of text needs to go here</p>
  </div>

export default () => (
  <section id="transactions">
    <NavigationBar />
    <MediaBackground
      overlay={
        <MediaBackgroundOverlay title="Need Title" body={overlayBody()} />
      } 
      image={image}  />
    <Container fluid className="transactions-body">
      <Row>
        <Col>
          <p>
          Since 2015, AELF & Presidio have successfully completed over 100 transactions. Our deal strategy is to acquire and lease assets that we know and understand, with our own equity. 
          Our target assets are those that may require more active management or technical expertise - this is where we can really add value. 
          Aircraft and engine acquisitions are achieved through a variety of channels, including airlines, OEMs, lessors and asset managers.
        </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>
              <p>
              Our team have significant experience in acquiring, leasing, managing and selling mid-life aircraft and engines throughout their life cycle. Our competence in placing mid-life aircraft on lease, managing and executing the sale of the aircraft is what we believe differentiates us from many of our competitors.
              </p>
            </li>
            <li>
              <p>
                We have structure sophisticated aircraft transactions in virtually all commercial aircraft markets in the world.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    {
      TRANSACTION_DATA.map((val, idx) => {
        return (
        <div>
          <TransactionDetail key={idx} listId={idx} transaction={val} /> 
         </div>
        );
      })
    } 
    </Container>
  </section>
);
