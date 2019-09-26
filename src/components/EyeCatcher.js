import React from 'react';
import PropTypes from 'prop-types';
import { 
  Container,
  Row,
  Col
} from 'react-bootstrap';

const renderTitle = title => {
  if (!title) {
    return null;
  }

  return (
    <div className="title-wrapper">
      { title }
    </div>
  )
}

const renderBody = body => 
  <div className="body-wrapper">
    { body }
  </div>

export default class EyeCatcher extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, body } = this.props.content;

    return (

      <Container className="eye-catcher-container">
        <Row>
          <Col>
            { renderTitle(title) }
            { renderBody(body) }
          </Col>
        </Row>
      </Container>
    )
  }
}

EyeCatcher.propTypes = {
  content: PropTypes.object.isRequired
}
