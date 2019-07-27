import React from 'react';
import './App.scss';
import {
  Container,
} from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';

import { HOME, PORTFOLIO, CONTACT } from './constants/Routes';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Lost from './pages/Lost';

library.add(fab, faCheckSquare, faCoffee, faEnvelope);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Hero /> */}
        <Container fluid>
          <NavigationBar />
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route path={PORTFOLIO} component={Portfolio} />
            <Route path={CONTACT} component={Contact} />
            <Route component={Lost} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
