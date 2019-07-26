import React from 'react';
import './App.css';
import {
  Container,
} from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Hero from './components/Hero';
import OurTeam from './components/team/OurTeam';

library.add(fab, faCheckSquare, faCoffee, faEnvelope);

function App() {
  return (
    <div className="App">
      <Hero />
      <Container>
        <OurTeam />
      </Container>
    </div>
  );
}

export default App;
