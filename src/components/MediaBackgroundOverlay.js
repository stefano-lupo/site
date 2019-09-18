import React from 'react';

export default ({ title, body }) =>
  <div>
    <div className="header-wrapper">
      <h1>{title}</h1>
      <hr />
    </div>
    {body}
  </div>
