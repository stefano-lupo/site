import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import AlternatingColumns from '../components/AlternatingColumns';
import NavigationBar from '../components/NavigationBar';
import MediaBackground from '../components/MediaBackground';
import TransactionsMediaOverlay from '../components/transactions/TransactionsMediaOverlay';
import EyeCatcher from '../components/EyeCatcher';


import AirTransat from '../assets/img/transactions/planes/air-transat.jpeg';
import SurinamAirways from '../assets/img/transactions/planes/surinam-airways.jpeg';

import image from '../assets/img/header/transactions-placeholder.jpg';



const EYE_CATCHER_CONTENT =  {
  title:
    <h1>Transactions</h1>,
  body: 
    <p>
      Since 2015, AELF and Presidio Aircraft Leasing have together successfully completed over 100 transactions. Our deal strategy is to acquire and lease mid-life assets that we know and understand with our own equity. Our target assets are those that may require more active management throughout the transition process or significant technical expertise – this is where we can truly add value. Aircraft and engine acquisitions are achieved through a variety of channels, including airlines, OEMs, other leasing companies and asset managers. 
    </p>
}

const CONTENT = [

  {
    image: AirTransat,
    title: "Our Team",
    body: 
      <p>
        Our team have significant experience in acquiring, leasing, managing and trading mid-life aircraft and engines throughout their life cycle. The core competencies related to deal generation, technical bridging, lease administration and technical management are all skills housed internally by the group. 
      </p>
  },
  {
    image: SurinamAirways,
    title: "Experienced",
    body: 
      <p>
        The group has structured sophisticated aircraft transactions in virtually all commercial aircraft markets in the world. A broad range of innovative aircraft transactions have been completed, including but not limited to sale and leaseback, sale stub leaseback, forward purchase, acquisition subject to lease, dry leases and power by the hour arrangements
      </p>
  },
]

export default () => (
  <section id="transactions">
    <NavigationBar />
    <MediaBackground
      overlay={<TransactionsMediaOverlay />}
      image={image} 
      backgroundPosition={['center', 'bottom']} 
      hasMarginBottom={false} />
    <Container fluid className="transactions-body">
      <EyeCatcher content={EYE_CATCHER_CONTENT} />
      <AlternatingColumns rows={CONTENT} />
    </Container>
  </section>
);
