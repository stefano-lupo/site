import React from 'react';
import './App.scss';
import {
  Container,
} from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faTwitter, faLinkedin, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { 
  faCheckSquare,
   faCoffee, 
   faEnvelope, 
   faChartLine, 
   faCreditCard, 
   faLightbulb, 
   faPeopleCarry, 
   faBrain, 
   faUserTie, 
   faCopyright, 
   faPhone, 
   faLocationArrow, 
   faBuilding } 
from '@fortawesome/free-solid-svg-icons';

import NavigationBar from './components/NavigationBar';

import { HOME, TRANSACTIONS, PARTS_SUPPORT,  CONTACT, AIRCRAFT, ENGINES } from './constants/Routes';

import Home from './pages/Home';
import Aircraft from './pages/Aircraft';
import Engines from './pages/Engines';
import Transactions from './pages/Transactions';
import PartsSupport from './pages/PartsSupport';
import Contact from './pages/Contact';
import Lost from './pages/Lost';
import Footer from './components/footer/Footer';

library.add(fab, faCheckSquare, faCoffee, faEnvelope, faChartLine, faCreditCard, faLightbulb, faPeopleCarry, faBrain, faUserTie, faCopyright, faPhone, faLocationArrow, faBuilding);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route path={AIRCRAFT} component={Aircraft} />
          <Route path={ENGINES} component={Engines} />
          <Route path={TRANSACTIONS} component={Transactions} />
          <Route path={PARTS_SUPPORT} component={PartsSupport} />
          <Route path={CONTACT} component={Contact} />
          <Route component={Lost} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
