import React from 'react';
import { Container, Row, Col, Image, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { TRANSACTIONS } from '../../constants/Routes';
import TRANSACTION_DATA from '../../data/TransactionData';

const NUM_RECENT_TRANSACTIONS = 4;

const RECENT_TRANSACTIONS = TRANSACTION_DATA.slice(0, Math.min(TRANSACTION_DATA.length, NUM_RECENT_TRANSACTIONS));

export default class RecentTransactions extends React.Component {

  renderRecentTransaction(transaction) {
    const { type, asset, model, quantity, logoPath, date } = transaction;
    console.log(transaction);
    let description = type === 'acquisition' ? 'Acquired' : 'Leased';
    description = description + ' ' + quantity + ' ' + model.toUpperCase();
    description = quantity === 1 ? description : description + 's';
    return (
        <Card onClick={() => console.log("click")}>
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
      // </Col>
    );
  }

  renderRecentTransactionOverlay(transaction) {
    const { type, asset, model, quantity, logoPath, imagePath, date } = transaction;
    return (
      <Card className="bg-dark text-white">
        <Card.Img src={imagePath} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
  }

  render() {
    return (
      <Container id="recent-transactions" className="text-center">
        <h1 className="text-center">Recent Transactions</h1>
        <p>We are constantly securing new deals and expanding our portfolio. Check our all of our <Link to={TRANSACTIONS}>past transactions!</Link></p>
        <CardDeck>
          {RECENT_TRANSACTIONS.map(this.renderRecentTransaction)}
        </CardDeck>
      </Container>

    )
  }
}