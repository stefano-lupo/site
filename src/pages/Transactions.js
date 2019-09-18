import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
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
    <p>
      Since 2015, AELF & Presidio have successfully completed over 100 transactions. Our deal strategy is to acquire and lease assets that we know and understand, with our own equity. 
    </p>
    <p>
      Our target assets are those that may require more active management or technical expertise - this is where we can really add value. 
    </p>
    <p>
      Aircraft and engine acquisitions are achieved through a variety of channels, including airlines, OEMs, lessors and asset managers.
    </p>
  </div>

export default () => (
  <section id="transactions">
    <NavigationBar />
    <MediaBackground
      overlay={
        <MediaBackgroundOverlay title="Need Title" body={overlayBody()} />
      } 
      image={image} 
      hasMarginBottom={false} />
    <Container className="transactions-body" fluid style={{"max-width": "2000px"}}>
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
