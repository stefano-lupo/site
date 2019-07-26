import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TeamMemberBio extends React.Component {
  componentDidMount() {

  }

  render() {
    const { onHide, name, title, imgPath } = this.props;

    return (
      <Modal className="team-bio-modal" centered {...this.props} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <p>{name} - {title}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <Image fluid src={imgPath} />
              </Col>
              <Col>
                <p>Incididunt id mollit Lorem ullamco proident culpa aliquip anim velit adipisicing aliquip laboris tempor pariatur. Occaecat ullamco dolore amet occaecat aliqua est proident commodo dolor cupidatat dolore labore consectetur. Consectetur irure in cupidatat id in id Lorem amet. </p>
                <Row>
                  <Col xs={12}><span><FontAwesomeIcon icon={['fab', 'apple']} /></span><a href="tel:00353 86 555 22 11">
                      <p>00353 86 555 22 11</p>
                    </a></Col>
                  {/* <Col xs={9}>
                    <a href="tel:00353 86 555 22 11">
                      <p>00353 86 555 22 11</p>
                    </a>
                  </Col> */}
                </Row>
                <Row>
                  <Col xs={3}><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></Col>
                  <Col xs={9}>
                    <a href="https://www.linkedin.com/in/stephen-haire-9b4805123">
                      <p>{name}</p>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}><FontAwesomeIcon icon="envelope" /></Col>
                  <Col xs={9}><a href="mailto:stephen@aelfinc.com"><p>stephen@aelfinc.com</p></a></Col>
                </Row>
                
                
              </Col>
            </Row>
    
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

TeamMemberBio.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
