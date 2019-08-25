import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Image,
} from 'react-bootstrap';
import TransactionDetail from '../components/transactions/TransactionDetail';

import A330 from '../assets/img/transactions/planes/airbus-a330.jpeg';
import AirTransat from '../assets/img/transactions/planes/air-transat.jpeg';
import AtlasGlobal from '../assets/img/transactions/planes/atlas-global.jpeg';
import SurinamAirways from '../assets/img/transactions/planes/surinam-airways.jpeg';

import AirbusLogo from '../assets/img/partner-logos/airbus.png';
import AirTransatLogo from '../assets/img/partner-logos/air-transat.png';
import SurinamAirwaysLogo from '../assets/img/partner-logos/surinam-airways.png';

import TRANSACTION_DATA from '../data/TransactionData';

export default () => (
  <section id="transactions" className="container-fluid">
    {
      TRANSACTION_DATA.map((val, idx) => <TransactionDetail key={idx} listId={idx} transaction={val} />)
    }

  </section>
);
