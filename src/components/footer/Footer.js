import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import Partners from './Partners';


// export default () => (
//   <footer className="container-fluid text-center">
//     <Row>
//       <Col className="">
//         <h3 className="">Our Partners</h3>
//         <hr />
//         <Row className="h-100 align-items-center">
//           <Col className="partner-wrapper">
//             <Partners />
//           </Col>
//         </Row>
       
//         {/* <hr />
//         <div className="align-items-center">
//           <p>hi</p>
//           <Partners />
//         </div> */}
//       </Col>
//       <Col>
//         <h3>Contact Us</h3>
//         <hr />
//         <p>Corporate Office: +1 (312) 445 9095</p>
//         <p>info@presidioaircraftleasing.com</p>
//         <p>Chicago Sales & Leasing Inquiries: +1 (312) 690 4696</p>
//         <p>Miami Sales & Leasing Inquiries: +1 (305) 517 3004</p>
//         <p>sales@presidioaircraftleasing.com</p>
//         <p>Parts Support: +1 (312) 858 1472</p>
//         <p>Fax: 1 (312) 445 9868</p>
//       </Col>
//       <Col>
//         <h3>Contact Us</h3>
//         <hr />
//       </Col>
//     </Row>
//   </footer>
// );


export default () => (
  <footer className="text-center d-flex">
    <div className="column partners-wrapper">
      <div>
        <h3>Our Partners</h3>
        <hr />
      </div>
      <div className="partners">
        <Partners />
      </div>
    </div>
    <div className="column contact-info">
      <h3>Contact Us</h3>
      {/* <Partners /> */}
      <hr />

      <p>Corporate Office: +1 (312) 445 9095</p>
      <p>info@presidioaircraftleasing.com</p>
      <p>Chicago Sales & Leasing Inquiries: +1 (312) 690 4696</p>
      <p>Miami Sales & Leasing Inquiries: +1 (305) 517 3004</p>
      <p>sales@presidioaircraftleasing.com</p>
      <p>Parts Support: +1 (312) 858 1472</p>
      <p>Fax: 1 (312) 445 9868</p>
    </div>
  </footer>
);
