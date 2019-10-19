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
  props.rows.map((row, idx) => <AlternatingColumn content={row} listIndex={idx} />);

const getImageMdConfig = isImageRight => {
  return (
    {
      span: 6,
      offset: isImageRight ? 0 : 0,
      order: isImageRight ? 12 : 0
    }
  );  
}

const getContentMdConfig = isImageRight => {
  return (
    {
      span: 6,
      offset: isImageRight ? 0 : 0
    }
  )
}

const getRowClassNames = isEvenRow => {
  return [
    "alternating-column-row",
    isEvenRow ? "even-row" : "odd-row"
  ].join(" ");
}

const getImageColumnClassNames = isImageRight => {
  const side = isImageRight ? 'right' : 'left';
  const classes = [
    'alternating-column-image-column',
    `triangle-image-column-${side}`
  ]

  return classes.join(' ');
}

const getContentColumnClassNames = isImageRight => {
  const side = isImageRight ? 'left' : 'right';
  const classes = [
    'alternating-column-content-column',
    `triangle-image-column-${side}`
  ]

  return classes.join(' ');
}


class AlternatingColumn extends React.Component {

  render () {
    const { listIndex, content } = this.props;
    const { image, body, title } = content;

    const isEvenRow = listIndex % 2 == 0;

    return (
      <Row className={getRowClassNames(isEvenRow)}>
        <Col 
          className={getImageColumnClassNames(isEvenRow)} 
          md={getImageMdConfig(isEvenRow)}>
          <Image fluid src={image} />
        </Col>
        <Col className={getContentColumnClassNames(isEvenRow)} md={getContentMdConfig(isEvenRow)}>
          <div>
            <h2>{title}</h2>
            {body}
          </div>
        </Col>
        <hr />
      </Row>
    )

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
