import React from 'react';
import './App.scss';
import {
  Container,
} from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faTwitter, faLinkedin, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';

import { HOME, PORTFOLIO, CONTACT, GALLERY, TRANSACTIONS } from './constants/Routes';

import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Lost from './pages/Lost';
import Footer from './components/footer/Footer';

library.add(fab, faCheckSquare, faCoffee, faEnvelope);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route path={GALLERY} component={Gallery} />
          <Route path={TRANSACTIONS} component={Transactions} />
          <Route path={CONTACT} component={Contact} />
          <Route component={Lost} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
