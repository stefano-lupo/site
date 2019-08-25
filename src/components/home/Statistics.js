import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


export default class Statistics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wasVisible: false
    };
  }

  onVisibilityChange(isVisible) {
    console.log("Visibilty changed to " + isVisible)
    if (isVisible) {
      this.setState({ wasVisible: true });
    }
  }

  renderStatistic(end, prefix, suffix, description) {
    if (!this.state.wasVisible) {
      end = 0;
    }

    return (
      <Col xs={12} md={4}>
        <p className="counting-stat">{prefix}<CountUp end={end} duration={3} />{suffix}</p>
        <p>{description}</p>
      </Col>
    );
  }

  render() {
    return (
      <VisibilitySensor onChange={this.onVisibilityChange.bind(this)}>
        <Container id="statistics">
          <Row>
            {this.renderStatistic(150, "", "", "aircraft leased")}
            {this.renderStatistic(1, "$", " Billion", "in transactions")}
            {this.renderStatistic(130, "", " Years", "of combined experience in the industry")}
            {this.renderStatistic(29, "", "", "employees at your service")}
            {this.renderStatistic(36, "", " countries", "in which we have conducted business")}
            {this.renderStatistic(30, "", "", "companies worked with")}
          </Row>
        </Container>
      </VisibilitySensor>
    );
  }
}

