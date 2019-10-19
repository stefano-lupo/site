import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Image,
  Row
} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

import MediaBackground from '../components/MediaBackground';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';
import AlternatingColumns from '../components/AlternatingColumns';
import EyeCatcher from '../components/EyeCatcher';

import SalesImage from '../assets/img/jet-photos/cropped/737.jpg';
import LeasingImage from '../assets/img/jet-photos/cropped/a350.jpg';
import ExchangeImage from '../assets/img/jet-photos/cropped/air-transat-1.jpg';
import FinanceImage from '../assets/img/jet-photos/cropped/crj706.jpg';

import video from '../assets/video/engine.mp4';
import poster from '../assets/img/posters/engine-poster.jpg';
import EngineClose from '../assets/img/engines/engine-square.jpg';
import SplitImages from '../components/SplitImages';
import FaList from '../components/FaList';

const EYE_CATCHER_CONTENT = {
  title: <h1>Title Here</h1>,
  body: <p> We buy, lease and finance a variety of engines to power today’s commercial aircraft. We tailor transaction structures to suit specific fleet goals. We specialize in the provision of flexible short and long-term engine support packages. </p>
}

const SPLIT_IMAGES_CONTENT = [
  {
    image: SalesImage,
    text: "Sales",
    overlay: <p>Ipsum eu est duis cupidatat. Incididunt laboris ea do nisi adipisicing ex deserunt dolor officia dolore velit. Consectetur nostrud aliqua ullamco nisi. Irure eu tempor in proident aliqua id.</p>
  },
  {
    image: LeasingImage,
    text: "Leasing",
    overlay: <p>Ipsum eu est duis cupidatat. Incididunt laboris ea do nisi adipisicing ex deserunt dolor officia dolore velit. Consectetur nostrud aliqua ullamco nisi. Irure eu tempor in proident aliqua id.</p>
  },
  {
    image: ExchangeImage,
    text: "Exhchange",
    overlay: <p>Ipsum eu est duis cupidatat. Incididunt laboris ea do nisi adipisicing ex deserunt dolor officia dolore velit. Consectetur nostrud aliqua ullamco nisi. Irure eu tempor in proident aliqua id.</p>
  },
  {
    image: FinanceImage,
    text: "Financing",
    overlay: <p>Ipsum eu est duis cupidatat. Incididunt laboris ea do nisi adipisicing ex deserunt dolor officia dolore velit. Consectetur nostrud aliqua ullamco nisi. Irure eu tempor in proident aliqua id.</p>
  },
]

// const CONTENT = [
//   {
//     image: EngineClose,
//     title: "Engine Solutions",
//     body: 
//     <div>
//       <p>
//         We offer a comprehensive range of individually tailored financing and leasing based products including:
//       </p>
//       <ul>
//         <li>Engine acquisitions and disposals</li>
//         <li>Sale and leasebacks</li>
//         <li>AOG support</li>
//         <li>Spare engine support</li>
//         <li>Green-time and Power by the hour lease structures</li>
//       </ul>
//     </div>
//   },
//   {
//     image: EngineClose,
//     title: "Engine Sales, Leasing, Exchange and Financing",
//     body: 
//       <p>
//       	We buy, lease and finance a variety of engines to power today’s commercial aircraft. We tailor transaction structures to suit specific fleet goals. We specialize in the provision of flexible short and long-term engine support packages. 
//       </p>
//   }
// ]

const LIST_ITEMS = [
  "Engine acquisitions and disposals",
  "Sale and leasebacks",
  "AOG support",
  "Spare engine support",
  "Green-time and Power by the hour lease structures"
]

const BasicContent = () =>
<Row className="basic-content">
  <Container>
    <Row>
    <Col>
        <p>
       
      </p>
      </Col>  
    </Row>   
    <Row>
      <Col>
        <p>
        We offer a comprehensive range of individually tailored financing and leasing based products including:
      </p>
      <FaList items={LIST_ITEMS}/>
      </Col>
    </Row>
  </Container>
      
</Row>



export default () => (
  <section id="engines">
    <NavigationBar isMastheadPage={true} />
    <MediaBackground 
      overlay={
        <MediaBackgroundOverlay 
          title={"Engine Solutions"} 
          body={<h2>Sales, Leasing, Exchange and Financing</h2>} 
        />
      }
      video={video} 
      image={poster} />

    <Container fluid>
      <EyeCatcher content={EYE_CATCHER_CONTENT} />
      <BasicContent />
      <SplitImages content={SPLIT_IMAGES_CONTENT} />
      {/* <AlternatingColumns rows={CONTENT} /> */}
    </Container>
    
  </section>
);
