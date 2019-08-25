import React from 'react';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-reveal';

const renderIconDesc = (icon, desc) => 
  <Col sm={6} md={3}>
    <FontAwesomeIcon className="icon" icon={icon} size="3x" />
    <p className="mechanism">{desc}</p>
  </Col>


export default () => 
  <Container id="mission-statement">
    <Row>
      <Col>
        <Fade>
          <p className="statement-text text-left">
            Our mission is to generate exceptional <b>financial results</b> through
          </p>
        </Fade>
      </Col>
    </Row>
    <Fade delay={750}>
      <Row>
        {renderIconDesc("chart-line", "Financial Engineering")}
        {renderIconDesc("lightbulb", "Creative Solutions")}
        {renderIconDesc("people-carry", "Relationships")}
        {renderIconDesc("user-tie", "Technical Competence")}
      </Row>
    </Fade>
    <Row>
      <Col>
        <Fade delay={1500}>
          <p className="statement-text text-right">while taking <b>risks that we understand</b> and know <b>how to navigate</b>.</p>
        </Fade>
      </Col>
    </Row>
  </Container>

/*

export default class MissionStatement extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      wasVisible: false
    };
  }

  onVisibilityChange(isVisible) {
    console.log("change to " + isVisible);
    if (isVisible) {
      this.setState({ wasVisible: true })
    }
  }

  renderMissionStatement() {
    return (
      <Container id="mission-statement">
        <Row>
          <Col>
            <FadeIn delay={250}>
              <p className="statement-text text-left">
                Our mission is to generate exceptional <b>financial results</b> through
              </p>
            </FadeIn>
          </Col>
        </Row>
        <FadeIn delay={750}>
          <Row>
            {renderIconDesc("chart-line", "Financial Engineering")}
            {renderIconDesc("lightbulb", "Creative Solutions")}
            {renderIconDesc("people-carry", "Relationships")}
            {renderIconDesc("user-tie", "Technical Competence")}
          </Row>
        </FadeIn>
        <Row>
          <Col>
          <FadeIn delay={1250}>
            <p className="statement-text text-right">while taking <b>risks that we understand</b> and know <b>how to navigate</b>.</p>
          </FadeIn>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {



    return (

    );
  }
} 
  */
