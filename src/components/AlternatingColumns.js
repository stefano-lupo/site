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

const AlternatingColumns = props => 
  props.rows.map((row, idx) => <AlternatingColumn content={row} listIndex={idx} />)

class AlternatingColumn extends React.Component {

  render() {
    const { listIndex, content } = this.props;
    const { image, body, title } = content;

    let textAlignClass = 'text-left';
    let infoColOrder = 1;
     
    // First and every second row
    if (listIndex % 2 !== 0) {
      textAlignClass = 'text-right';
      infoColOrder = 12;
    }


    return (
      <Row className="alternating-column-row">
        <Col className="alternating-column-image-column" md={{ span: 6, order: 6 }}>
          <Image fluid src={image} />
        </Col>
        <Col className="alternating-column-content-column" md={{ span: 6, order: infoColOrder }}>
          <div className={textAlignClass}>
            <h2>{title}</h2>
            {body}
          </div>
        </Col>
        <hr />
      </Row>
    );
  }
}

AlternatingColumns.propTypes = {
  rows: PropTypes.array.isRequired
}

AlternatingColumn.propTypes = {
  listId: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired
}

export default AlternatingColumns;
