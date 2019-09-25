import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import {
  Col,
  Container,
  Image,
  Row,
} from 'react-bootstrap';


export default class AlternatingColumns extends React.Component {


  componentDidMount() {

  }

  render() {
    const { listIndex, image, content } = this.props;

    let infoColTextAlign = 'text-center';
    let infoColOrder = 1;
     
    // First and every second row
    if (listIndex % 2 !== 0) {
      infoColTextAlign = 'text-center';
      infoColOrder = 12;
    }


    return (
      <Row className="alternating-column-row">
        <Col className="alternating-column-image-column" md={{ span: 6, order: 6 }}>
          <Image fluid src={image} />
        </Col>
        <Col className="alternating-column-content-column" md={{ span: 6, order: infoColOrder }}>
            {content}
        </Col>
        <hr />
      </Row>
    );
  }
}

AlternatingColumns.propTypes = {
  listId: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
  content: PropTypes.element.isRequired 
}
