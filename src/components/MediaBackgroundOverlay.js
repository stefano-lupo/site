import React from 'react';

export default ({ title, body }) =>
  <div className="overlay-wrapper">
    <div className="header-wrapper">
      <h1>{title}</h1>
      <hr />
    </div>
    <div className="body-wrapper">
      {body}
    </div>
  </div>
