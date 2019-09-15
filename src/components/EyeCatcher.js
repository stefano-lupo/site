import React from 'react';
import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';

export default class EyeCatcher extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle } = this.props;

    return (

      <Container className="eye-catcher-container">
        <Row>
          <Col>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}