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


// export default () => (
//   <footer className="text-center d-flex">
//     <div className="column partners-wrapper">
//       <div>
//         <h3>Our Partners</h3>
//         <hr />
//       </div>
//       <div className="partners">
//         <Partners />
//       </div>
//     </div>
//     <div className="column contact-info">
//       <h3>Contact Us</h3>
//       {/* <Partners /> */}
//       <hr />

//       <p>Corporate Office: +1 (312) 445 9095</p>
//       <p>info@presidioaircraftleasing.com</p>
//       <p>Chicago Sales & Leasing Inquiries: +1 (312) 690 4696</p>
//       <p>Miami Sales & Leasing Inquiries: +1 (305) 517 3004</p>
//       <p>sales@presidioaircraftleasing.com</p>
//       <p>Parts Support: +1 (312) 858 1472</p>
//       <p>Fax: 1 (312) 445 9868</p>
//     </div>
//   </footer>
// );


export default () => (
  <footer className="container-fluid">
    <div className="main-footer">
      <Row>
        
        <Col sm={6} md={{ span: 3, order: 1 }}>
          <h3>Our Partners</h3>
          <hr />
          <Partners />
        </Col>

        <Col sm={6} md={{ span: 3, offset: 1, order: 3 }} classNames="col-sm-6 col-md-3 col-md-offset-1 col-md-push-5" id="reach-me">
          <h3>Reach Me</h3>
          <hr />
          <p>
            <i classNames="fa fa-fw fa-phone btn-social btn-outline"></i>086 17 27 160
          </p>
          <p>
            <a classNames="no-decoration" href="https://www.linkedin.com/in/stefano-lupo/" alt="LinkedIn" target="_blank"><i classNames="fa fa-fw fa-linkedin btn-social btn-outline"></i>Stefano Lupo</a>
          </p>
          <p>
            <a classNames="no-decoration" href="https://github.com/stefano-lupo" alt="GitHub" target="_blank"><i classNames="fa fa-fw fa-github btn-social btn-outline"></i>stefano-lupo</a>
          </p>
          <p>
            <a classNames="no-decoration" href="mailto:webdesign@stefanolupo.com" target="_top"><i classNames="fa fa-fw fa-envelope-o btn-social btn-outline"></i>webdesign@stefanolupo.com</a>
          </p>
        </Col>

        <Col sm={12} md={{ span: 4, offset: 1, order: 2 }}>
							<h3>Testimonials</h3>
							<hr />
							<div classNames="testimonial" id="lp-testimonial" target="_blank">
								<p>
									Leigh-Anne Power
								</p>
								<p classNames="text-muted">
									<em>"From the minute that I met Stefano I was at ease with him due to his wonderful personality. His knowledge, creativity and the (tons of!) patience that he shown me has been incredibly helpful throughout the journey to the brilliant end result. He listened and remembered all that I required. I love my website, it is everything that I hoped for and more, thank you so much Stefano! "</em>
								</p>
								<p>
									<a href="http://www.leighannepower.com" target="_blank">leighannepower.com</a>
								</p>
							</div>
        </Col>
      </Row>
    </div>
  </footer>
);

/*
export default () => {
  <footer className="container-fluid">
    <div className="main-footer">
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <h3>My Partners</h3>
          <hr>
          <div class="row">
            <div class="col-xs-12">
              <a target="_blank" alt="Chez Sara Restaurant" href="http://chezsara.ie" class="chez-sara">Chez Sara Restaurant</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-md-offset-1 col-md-push-5" id="reach-me">
          <h3>Reach Me</h3>
          <hr>
          <p>
            <i class="fa fa-fw fa-phone btn-social btn-outline"></i>086 17 27 160
          </p>
          <p>
            <a class="no-decoration" href="https://www.linkedin.com/in/stefano-lupo/" alt="LinkedIn" target="_blank"><i class="fa fa-fw fa-linkedin btn-social btn-outline"></i>Stefano Lupo</a>
          </p>
          <p>
            <a class="no-decoration" href="https://github.com/stefano-lupo" alt="GitHub" target="_blank"><i class="fa fa-fw fa-github btn-social btn-outline"></i>stefano-lupo</a>
          </p>
          <p>
            <a class="no-decoration" href="mailto:webdesign@stefanolupo.com" target="_top"><i class="fa fa-fw fa-envelope-o btn-social btn-outline"></i>webdesign@stefanolupo.com</a>
          </p>
        </div>
						{/* <div class="col-sm-12 col-md-4 col-md-offset-1 col-md-pull-4">
							<h3>Testimonials</h3>
							<hr>
							<div class="testimonial" id="lp-testimonial" target="_blank">
								<p>
									Leigh-Anne Power
								</p>
								<p class="text-muted">
									<em>"From the minute that I met Stefano I was at ease with him due to his wonderful personality. His knowledge, creativity and the (tons of!) patience that he shown me has been incredibly helpful throughout the journey to the brilliant end result. He listened and remembered all that I required. I love my website, it is everything that I hoped for and more, thank you so much Stefano! "</em>
								</p>
								<p>
									<a href="http://www.leighannepower.com" target="_blank">leighannepower.com</a>
								</p>
							</div>
							<div class="testimonial" id="westbury-testimonial">
								<p>
									Westbury Casino
								</p>
								<p class="text-muted">
									<em> "The assistance and support we received was excellent. Everything is straightforward and very user friendly! We got a totally new website and at any given time, our customers can see exactly what is happening in our business. Updating it is so easy - we can even do it on our phones!
								</p>
								<p class="text-muted">
									We are very happy with the choice we made and would recommend Stefano\'s service to other businesses as well!"</em>
								</p>
								<p>
									<a href="http://www.westburyclub.com" target="_blank">westburyclub.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
      
      <section id="copyright" class="container-fluid">
				<div class="row">
					<div class="col-sm-5 col-sm-offset-1">
						<p>
							<i class="fa fa-copyright" aria-hidden="true"></i> Stefano Lupo Web Design '. date("Y") .  '
						</p>
					</div>
					<div class="col-sm-5">
						<p class="text-right">
							Designed by <a href="http://www.stefanolupo.com/web-design.php">Stefano Lupo Web Design</a>
            </p>

					</div>
				</div>
			</footer>
}
*/