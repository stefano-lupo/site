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
    <VideoCover videoOptions={videoOptions(video, image)} className="media" /> 
    : null
    // : <Image fluid src={image} className="media" />
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

const mediaContainerClassName = hasMarginBottom => {
  const baseClassName = "px-0 masthead-correction media-container";
  console.log(hasMarginBottom)
  return !hasMarginBottom ? baseClassName : baseClassName + " mb-5"
}

export default class MediaBackground extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props.image)
    this.state = {
      mediaComponent: mediaComponent(props.video, props.image),
      containerClassName: mediaContainerClassName(props.hasMarginBottom),
      containerExtraStyles: props.video ? {} :
        {
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundAttachment: "fixed"
        } 
    }
  }

  render() {
    const { mediaComponent, containerClassName, containerExtraStyles } = this.state;

    console.log(containerExtraStyles)
    return (
      <Container fluid className={containerClassName} style={containerExtraStyles}>
        <Row>
          <Col>
            <div className="media-overlay">
              {this.props.overlay}
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
  overlay: PropTypes.elementType,
  padBottom: PropTypes.bool,
}

MediaBackground.defaultProps = {
  hasMarginBottom: true
}
