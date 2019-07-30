
import React from 'react';
import PropTypes from 'prop-types';
import CrossfadeImage from 'react-crossfade-image';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

import AirbusLogo from '../../assets/img/partner-logos/airbus.png';
import AirTransatLogo from '../../assets/img/partner-logos/air-transat.png';
import SurinamAirwaysLogo from '../../assets/img/partner-logos/surinam-airways.png';

const CYCLE_TIME_MS = 2000;
const PARTNERS = [
  AirbusLogo,
  AirTransatLogo,
  SurinamAirwaysLogo,
];

export default class Partners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      partnerIndex: 0,
    };

    this.cycle();
  }

  componentDidMount() {

  }

  cycle() {
    setTimeout(() => {
      let { partnerIndex } = this.state;
      partnerIndex = (++partnerIndex) % PARTNERS.length;
      this.setState({ partnerIndex });
      this.cycle();
    }, CYCLE_TIME_MS);
  }

  render() {
    const { partnerIndex } = this.state;
    
    return (
      <Image fluid duration={500} src={PARTNERS[partnerIndex]} />
    );
  }
}

/*
  
    <Row>
      <Col className="">
        <h3 className="">Our Partners</h3>
        <hr />
        <Row className="h-100 align-items-center">
          <Col className="partner-wrapper">
            <Partners />
          </Col>
        </Row>
       
        {/* <hr />
        <div className="align-items-center">
          <p>hi</p>
          <Partners />
        </div> 
      </Col>
      <Col>
        <h3>Contact Us</h3>
        <hr />
        <p>Corporate Office: +1 (312) 445 9095</p>
        <p>info@presidioaircraftleasing.com</p>
        <p>Chicago Sales & Leasing Inquiries: +1 (312) 690 4696</p>
        <p>Miami Sales & Leasing Inquiries: +1 (305) 517 3004</p>
        <p>sales@presidioaircraftleasing.com</p>
        <p>Parts Support: +1 (312) 858 1472</p>
        <p>Fax: 1 (312) 445 9868</p>
      </Col>
      <Col>
        <h3>Contact Us</h3>
        <hr />
      </Col>
    </Row> */
