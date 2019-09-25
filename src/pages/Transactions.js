import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import AlternatingColumns from '../components/transactions/AlternatingColumns';
import NavigationBar from '../components/NavigationBar';
import MediaBackground from '../components/MediaBackground';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';
import TransactionsMediaOverlay from '../components/transactions/TransactionsMediaOverlay';

import A330 from '../assets/img/transactions/planes/airbus-a330.jpeg';
import AirTransat from '../assets/img/transactions/planes/air-transat.jpeg';
import AtlasGlobal from '../assets/img/transactions/planes/atlas-global.jpeg';
import SurinamAirways from '../assets/img/transactions/planes/surinam-airways.jpeg';

import AirbusLogo from '../assets/img/partner-logos/airbus.png';
import AirTransatLogo from '../assets/img/partner-logos/air-transat.png';
import SurinamAirwaysLogo from '../assets/img/partner-logos/surinam-airways.png';

import AircraftHanger from '../assets/img/transactions/aircraft-hanger2.jpg';
import TRANSACTION_DATA from '../data/TransactionData';

const CONTENT = [
  {
    image: AtlasGlobal,
    content: 
      <p>
        Since 2015, AELF and Presidio Aircraft Leasing have together successfully completed over 100 transactions. Our deal strategy is to acquire and lease mid-life assets that we know and understand with our own equity. Our target assets are those that may require more active management throughout the transition process or significant technical expertise – this is where we can truly add value. Aircraft and engine acquisitions are achieved through a variety of channels, including airlines, OEMs, other leasing companies and asset managers. 
      </p>
  },
  {
    image: AtlasGlobal,
    content: 
      <p>
        Our team have significant experience in acquiring, leasing, managing and trading mid-life aircraft and engines throughout their life cycle. The core competencies related to deal generation, technical bridging, lease administration and technical management are all skills housed internally by the group. 
      </p>
  },
  {
    image: AtlasGlobal,
    content: 
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
      image={AircraftHanger} 
      backgroundPosition={['center', '100%']} />
    <Container fluid className="transactions-body">
      {
        CONTENT.map((val, idx) => 
          <AlternatingColumns 
            listIndex={idx} 
            image={val['image']}
            content={val['content']} />
        )
      }
    </Container>

  </section>
);
