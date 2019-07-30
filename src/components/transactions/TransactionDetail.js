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


export default class TransactionDetail extends React.Component {


  componentDidMount() {

  }

  render() {
    const { listId, transaction } = this.props;
    const {
      type,
      asset,
      model,
      quantity,
      partner,
      date,
      logoPath,
      imagePath,
    } = transaction;


    let rowClassName = '';
    let infoColTextAlign = 'text-center';
    let infoColOrder = 1;
     

    // First and every second row
    if (listId % 2 === 0) {
      rowClassName = 'light-row';
      infoColTextAlign = 'text-center';
      infoColOrder = 12;
    }

    const className = `${infoColTextAlign} info-column`;

    return (
      <Row>
        <Col md={{ span: 6, order: 6 }}>
          <Image fluid src={imagePath} />
        </Col>
        <Col md={{ span: 6, order: infoColOrder }} className={className}>
          <h2>{asset} {type}</h2>
          <p>Model: {model}</p>
          <p>Quantity: {quantity}</p>
          <p>Date: {date}</p>
          <Image className="align-self-end partner-logo" fluid src={logoPath} />
        </Col>
      </Row>
    );
  }
}

TransactionDetail.propTypes = {
  transactionId: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  transaction: PropTypes.object,  // Temp
}
