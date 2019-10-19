import React from 'react';
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

const columnStyle = image => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',  
  }
}

const contentOverlay = (overlay) => 
<div className="split-image-content">
  <p>{overlay}</p>
</div>


class SplitImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlayVisible: false
    }
  }

  setVisibility(visibility) {
    this.setState({
      overlayVisible: visibility
    })
  }

  render() {
    const { image, text, overlay } = this.props.content;
    const { overlayVisible } = this.state;
    
    return (
      <Col 
        onMouseEnter={() => this.setVisibility(true)} 
        onMouseLeave={() => this.setVisibility(false)} 
        sm={3} className="split-image-column" 
        style={columnStyle(image)}
      >
        {overlayVisible && contentOverlay(overlay)}
        <h4>{text}</h4>
      </Col>
    )
  }

}

export default class SpitImages extends React.Component {

  render() {
    const { content } = this.props;

    return (
        <Row className="split-images">
          {
            content.map(c => <SplitImage content={c} />)
          }      
        </Row>
    )
  }
}


