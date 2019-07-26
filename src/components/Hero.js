import React from 'react';
import '../assets/img/header/airplane.jpg';

export default class Hero extends React.Component {

  componentDidMount() {

  }

  render() {
    
    return (
      <section className="hero">
        <div className="hero-inner">
          <h1>AELF Incorporated</h1>
          <h2>Aircraft Leasing or something</h2>
        </div>
      </section>
    );
  }
}

