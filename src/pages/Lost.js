import React from 'react';

import { Link } from 'react-router-dom';
import { HOME } from '../constants/Routes';

export default () => (
  <div>
    <h3>Sorry, something went wrong</h3>
    <Link to={HOME}><p>Return to homepage</p></Link>
  </div>
);
