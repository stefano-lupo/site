import React from 'react';
import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { HOME } from '../constants/Routes';

import NavigationBar from '../components/NavigationBar';
import MediaBackground from '../components/MediaBackground';
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';
import EyeCatcher from '../components/EyeCatcher';

import image from '../assets/img/header/header-standin-wing.jpg';


const EYE_CATCHER_CONTENT = {
  body:
    <div>
      <p>Sorry about this, please <Link to={HOME}> head back to the homepage</Link></p>
    </div>
}


export default () => (
  <section id="lost">
    <NavigationBar />
    <MediaBackground 
      overlay={
        <MediaBackgroundOverlay 
          title="Sorry!"
          body={<h2>Yous should not have ended up here!</h2>} />}
      image={image} />
    <Container fluid>
      <EyeCatcher content={EYE_CATCHER_CONTENT} />
    </Container>
  </section>
);