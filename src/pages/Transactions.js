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


const sampleTransactions = [
  {
    type: 'acquisition',
    asset: 'airplane',
    model: 'a340-300',
    quantity: 2,
    partner: 'airbus',
    date: 'Late 2018',
    imagePath: A330,
    logoPath: AirbusLogo,
  },
  {
    type: 'lease',
    asset: 'airplane',
    model: 'a320-200',
    quantity: 4,
    partner: 'air-transat',
    date: 'Late 2018',
    imagePath: AirTransat,
    logoPath: AirTransatLogo,
  },

  {
    type: 'acquisition',
    asset: 'airplane',
    model: 'a340-300',
    quantity: 1,
    partner: 'airbus',
    date: 'Early 2018',
    imagePath: AtlasGlobal,
    logoPath: AirbusLogo,
  },

  {
    type: 'lease',
    asset: 'airplane',
    model: 'a340-300',
    quantity: 1,
    partner: 'surinam-airways',
    date: 'Early 2018',
    imagePath: SurinamAirways,
    logoPath: SurinamAirwaysLogo,
  },
];

export default () => (
  <section id="transactions" className="container-fluid">
    <div className="year">
      <h1>2018</h1>
      {
      sampleTransactions.map((val, idx) => <TransactionDetail key={idx} listId={idx} transaction={val} />)
      }
    </div>
    <div className="year">
      <h1>2017</h1>
      {
      sampleTransactions.map((val, idx) => <TransactionDetail key={idx} listId={idx} transaction={val} />)
      }
    </div>
  </section>
);
