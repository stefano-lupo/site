
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import Fade from 'react-reveal';

import AirbusLogo from '../../assets/img/partner-logos/airbus.png';
import AirTransatLogo from '../../assets/img/partner-logos/air-transat.png';
import SurinamAirwaysLogo from '../../assets/img/partner-logos/surinam-airways.png';
import HiFlyLogo from '../../assets/img/partner-logos/hifly.png';

const CYCLE_TIME_MS = 3000;
const PARTNERS = [
  AirbusLogo,
  AirTransatLogo,
  SurinamAirwaysLogo,
  HiFlyLogo
];

export default class Partners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      partnerIndex: 0,
      reRender: false
    };

    this.cycle();
  }

  componentDidMount() {

  }

  cycle() {
    setTimeout(() => {
      let { partnerIndex, reRender } = this.state;
      partnerIndex = (partnerIndex + 2) % PARTNERS.length;
      this.setState({ partnerIndex, reRender: !reRender });
      this.cycle();
    }, CYCLE_TIME_MS);
  }

  render() {
    const { partnerIndex, reRender } = this.state;
    
    return (
      <div className="partner-logos">
        <Fade spy={reRender}>
          <Image fluid src={PARTNERS[partnerIndex]} />
          <Image fluid src={PARTNERS[partnerIndex+1]} />
        </Fade>
      </div>
    )
  }
}
