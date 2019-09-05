import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Card, CardDeck } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

import { TRANSACTIONS } from '../../constants/Routes';
import TRANSACTION_DATA from '../../data/TransactionData';

const NUM_RECENT_TRANSACTIONS = 4;

const RECENT_TRANSACTIONS = TRANSACTION_DATA.slice(0, Math.min(TRANSACTION_DATA.length, NUM_RECENT_TRANSACTIONS));

class RecentTransactions extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  renderRecentTransaction(transaction) {
    const { history } = this.props;
    const { type, asset, model, quantity, logoPath, date } = transaction;

    let description = type === 'acquisition' ? 'Acquired' : 'Leased';
    description = description + ' ' + quantity + ' ' + model.toUpperCase();
    description = quantity === 1 ? description : description + 's';
    return (
      <Card onClick={() => history.push(TRANSACTIONS)}>
        <Card.Header>
          {asset} {type}
        </Card.Header>
        <Card.Body>
          <Card.Title>{description}</Card.Title>
          <Image src={logoPath} fluid />
        </Card.Body>
        <Card.Footer>
          {date}
        </Card.Footer>
      </Card>
    );
  }

  render() {
    return (
      <Container id="recent-transactions" className="text-center">
        <h1 className="text-center">Recent Transactions</h1>
        <p>We are constantly securing new deals and expanding our portfolio.
        <br /> Check our all of our <Link to={TRANSACTIONS}>past transactions!</Link></p>
        <CardDeck>
          {RECENT_TRANSACTIONS.map(this.renderRecentTransaction.bind(this))}
        </CardDeck>
      </Container>
    )
  }
}

export default withRouter(RecentTransactions);