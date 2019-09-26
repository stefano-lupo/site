
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Carousel,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import Fade from 'react-reveal';

import AirbusLogo from '../../assets/img/partner-logos/cropped/airbus.png';
import AirTransatLogo from '../../assets/img/partner-logos/cropped/air-transat.png';
import SurinamAirwaysLogo from '../../assets/img/partner-logos/cropped/surinam-airways.png';
import HiFlyLogo from '../../assets/img/partner-logos/cropped/hifly.png';

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
  }

  render() {
    return (
      <Carousel 
        controls={false}
        indicators={false}
      >
        {PARTNERS.map(img =>
          <Carousel.Item>
            <Image fluid src={img} />
          </Carousel.Item>
        )}
      </Carousel>
    );
  }
}

// export default class Partners extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       partnerIndex: 0,
//       reRender: false
//     };

//     this.cycle();
//   }

//   componentDidMount() {

//   }

//   cycle() {
//     setTimeout(() => {
//       let { partnerIndex, reRender } = this.state;
//       partnerIndex = (++partnerIndex) % PARTNERS.length;
//       this.setState({ partnerIndex, reRender: !reRender });
//       this.cycle();
//     }, CYCLE_TIME_MS);
//   }

//   render() {
//     const { partnerIndex, reRender } = this.state;
    
//     return (
//       <div className="partner-logos">
//         <Fade spy={reRender}>
//           <Image fluid className="partner-image" src={PARTNERS[partnerIndex]} />
//         </Fade>
//       </div>
//     )
//   }
// }
