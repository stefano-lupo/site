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

const imageColumn = imagePath => (
  <Col md={6}>
    <Image fluid src={imagePath} />
  </Col>
);

const infoColumn = (transaction, textAlignClassName) => {
  const {
    type,
    asset,
    model,
    quantity,
    partner,
    date,
    logoPath,
  } = transaction;

  const className = `${textAlignClassName} info-column`;

  return (
    <Col md={6} className={className}>
      <h2>{asset} {type}</h2>
      <p>Model: {model}</p>
      <p>Quantity: {quantity}</p>
      <p>Date: {date}</p>
      <Image className="align-items-end border partner-logo" fluid src={logoPath} />
    </Col>
  );
};

export default class TransactionDetail extends React.Component {


  componentDidMount() {

  }

  render() {
    const { listId, transaction } = this.props;
    let columns = [];
    let rowClassName = '';
    let infoTextAlignClassName = '';
    

    if (listId % 2 === 0) {
      rowClassName = 'light-row';
      infoTextAlignClassName = 'text-right';
      columns = [imageColumn(transaction.imagePath), infoColumn(transaction, infoTextAlignClassName)];
    } else {
      // rowClassName = 'dark-row';
      infoTextAlignClassName = 'text-left';
      columns = [infoColumn(transaction, infoTextAlignClassName), imageColumn(transaction.imagePath)];
    }

    return (
      <Container className={rowClassName} fluid>
        <Row>
          {columns.map(col => col)}
        </Row>
      </Container>
    );
  }
}

TransactionDetail.propTypes = {
  transactionId: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  transaction: PropTypes.object,  // Temp
}
