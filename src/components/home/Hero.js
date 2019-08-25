import React from 'react';
import '../../assets/img/header/airplane.jpg';

export default class Hero extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">AELF Inc.</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">Aircraft Leasing, Financing and Stuff.</h2>
          </div>
        </div>
      </header>
      // <section className="hero">
      //   <div className="hero-inner">
      //     <h1>AELF Incorporated</h1>
      //     <h2>Aircraft Leasing or something</h2>
      //   </div>
      // </section>
    );
  }
}

