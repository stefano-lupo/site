import React from 'react';

import { Link } from 'react-router-dom';
import { HOME } from '../constants/Routes';
import NavigationBar from '../components/NavigationBar';

export default () => (
  <div>
    <NavigationBar />
    <h3>Sorry, something went wrong</h3>
    <Link to={HOME}><p>Return to homepage</p></Link>
  </div>
);
