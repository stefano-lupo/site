import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

import {
  Container,
  Carousel,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap';

import { TRANSACTIONS } from '../../constants/Routes';

import PLANE_A350 from '../../assets/img/jet-photos/cropped/a350.jpg';
import PLANE_737 from '../../assets/img/jet-photos/cropped/737.jpg';
import PLANE_CRJ706 from '../../assets/img/jet-photos/cropped/crj706.jpg';
import EXTRA from '../../assets/img/jet-photos/cropped/extra.jpg';



const IMAGES = [PLANE_A350, PLANE_737, PLANE_CRJ706, EXTRA];

// export default () => (
//   <section id="portfolio">
//     <Container fluid>
//       <h1>Some of our Aircraft</h1>
//       <p>Commodo minim id nostrud commodo enim aliqua ea excepteur magna nulla et quis laboris ea. Eu occaecat eu non excepteur. In mollit cillum duis eiusmod elit officia non labore tempor. Commodo adipisicing Lorem anim eiusmod ad et. Lorem ullamco et velit reprehenderit non occaecat pariatur sunt non nostrud excepteur ullamco eiusmod.</p>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={Boeing}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Boeing 747 100</h3>
//             <p>It's a white plane!</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={Embraer}
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>Emraer E175-E2</h3>
//             <p>Contains several luxury windows.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       <Row className="mt-1">
//         <Col>
//           <Link className="no-underline" to={TRANSACTIONS}>
//             <Button size="lg" block>View Full Portfolio</Button>
//           </Link>
//         </Col>
//       </Row>
//     </Container>
//   </section>
// );


export default class PortfolioSlides extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      reFadeWatcher: false,
      imageIndex: 0
    }
    this.cycle();
  }

  cycle() {
    setTimeout(() => {
      let { imageIndex, reFadeWatcher } = this.state;
      imageIndex = (imageIndex + 2) % IMAGES.length;
      this.setState({ imageIndex, reFadeWatcher: !reFadeWatcher });
      this.cycle();
    }, 5000);
  }

  render() {
    const { reFadeWatcher, imageIndex } = this.state;

    return (
      <Container fluid id="portolio">
        {/* <Row>
          <Col>
            <h1>Some of our Aircraft</h1>
            <p>Commodo minim id nostrud commodo enim aliqua ea excepteur magna nulla et quis laboris ea. Eu occaecat eu non excepteur. In mollit cillum duis eiusmod elit officia non labore tempor. Commodo adipisicing Lorem anim eiusmod ad et. Lorem ullamco et velit reprehenderit non occaecat pariatur sunt non nostrud excepteur ullamco eiusmod.</p>
            </Col>
          </Row> */}
        <Row>
          <Fade spy={reFadeWatcher}>
            <Image fluid src={IMAGES[imageIndex]} />
          </Fade>
        </Row>
      </Container>
    );
  }
}