import React from 'react';
import './App.css';
import {
  Container,
} from 'react-bootstrap';

import Hero from './components/Hero';
import OurTeam from './components/team/OurTeam';

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
