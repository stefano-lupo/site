import React from 'react';

import {
  Container,
  Row,
  Col,
  Card,
  Image,
  CardDeck
} from 'react-bootstrap';

import PresidioLogo from '../../assets/img/logos/presidio-black-logo.png';
import AelfLogo from '../../assets/img/logos/aelf-black-logo.png';
import JoinedLogo from '../../assets/img/logos/combined-logos.png';

// const PresidioAelf = () => 
//   <Container>
//     <Row>
//       <Col md={6}>
//         <p className="text-left">
//           Aircraft Engine Lease Finance Inc. is a privately held commercial aircraft and engine leasing company based in Puerto Rico.</p>
//         </Col>
//         <Col md={6}>
//           <p className="text-center">
//             Presidio Aircraft Leasing is the group's exclusive marketing partner based in Chicago, USA. Presidio provides AELF with acquisition, re-marketing and advisory services.
//           </p>
//         </Col>
//         <Col md={{span: 6, offset:3 }}>
//           <p className="text-right">
//             Together, AELF and Presidio provide customized fleet financing solutions to airlines around the world. The group maintains a professional team of in-house aircraft leasing experts, focused on ensuring aircraft investments are secure and professionally managed
//           </p>
//       </Col>
//     </Row>
//   </Container>

const PresidioAelf = () => (
  <Container id="presidio-aelf" className="py-5">
    {/* <h1 className="text-center">About our aircraft leasing group</h1> */}
    <Row>
      <Col md={{span: 4, order: 2}}>
        <Image className="combined-logos" fluid src={JoinedLogo} />
      </Col>
      <Col md={8}>
      <h1>About Us</h1>
      <p> 
        Aircraft Engine Lease Finance Inc. is a privately held commercial aircraft and engine leasing company based in Puerto Rico.</p>
      <p> 
        Presidio Aircraft Leasing is the group's exclusive marketing partner based in Chicago, USA. Presidio provides AELF with acquisition, re-marketing and advisory services.</p>
      <p>
        Together, AELF and Presidio Aircraft Leasing provide customized fleet financing solutions to airlines around the world. The group maintains a professional team of in-house aircraft leasing experts, focused on ensuring aircraft investments are secure and professionally managed.
      </p>
      </Col>
    </Row>
    
      {/* <Row>
        <Col>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Aircraft Engine Lease Finance Inc.</Card.Title>
              <Card.Text>
                Aircraft Engine Lease Finance Inc. is a privately held commercial aircraft and engine leasing company based in Puerto Rico.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Presidio Aircraft Leasing</Card.Title>
              <Card.Text>
                Presidio Aircraft Leasing is the group's exclusive marketing partner based in Chicago, USA. Presidio provides AELF with acquisition, re-marketing and advisory services.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>Exclusive Partners</Card.Title>
              <Card.Text>
                Together, AELF and Presidio Aircraft Leasing provide customized fleet financing solutions to airlines around the world. The group maintains a professional team of in-house aircraft leasing experts, focused on ensuring aircraft investments are secure and professionally managed
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
  </Container>
);


export default PresidioAelf;
