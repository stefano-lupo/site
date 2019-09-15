import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from 'react-bootstrap';

import VideoCover from 'react-video-cover';


const mediaComponent = (video, image) => {
  return video ? 
    <VideoCover videoOptions={videoOptions(video, image)} className="media" /> : 
    <Image fluid src={image} className="media" />
}

const videoOptions = (src, poster) => {
  return {
    src,
    poster,
    autoPlay: true,
    loop: true,
    muted: true
  }
}

export default class MediaBackground extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mediaComponent: mediaComponent(props.video, props.image)
    }
  }

  render() {
    const { mediaComponent } = this.state;
    return (
      <Container fluid className="px-0 masthead-correction media-container">
        <Row>
          <Col>
            <div className="media-overlay">
              {this.props.overlay != null && this.props.overlay()}
            </div>
            {mediaComponent}
          </Col>
        </Row>
      </Container>
      
      // <video className='videoTag' autoPlay loop muted>
      //   <source src={video} type='video/mp4' />
      //   Background videos are not supported by your browser.
      // </video> 
    )
  }
}

MediaBackground.propTypes = {
  video: PropTypes.object,
  image: PropTypes.object.isRequired,
  overlay: PropTypes.func
}

MediaBackground.defaultProps = {
  isVideo: false
}
