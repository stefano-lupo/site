import React from 'react';
import { Container } from 'react-bootstrap';

import Hero from '../components/home/Hero';
import PresidioAelf from '../components/home/PresidioAelf';
import MissionStatement from '../components/home/MissionStatement';
import Services from '../components/home/Services';
import Statistics from '../components/home/Statistics';
import WorldMap from '../components/home/WorldMap';
import PortfolioSlides from '../components/home/PortfolioSlides';
import RecentTransactions from '../components/home/RecentTransactions';
import NavigationBar from '../components/NavigationBar';
import MediaBackground from '../components/MediaBackground';

import AirplaneHero from '../assets/img/header/airplane-wing-bw.jpg';

const overlay = () =>
  <div>
    <h1>AELF & Presidio</h1>
    <hr />
    <h2>Full-service commercial aircraft leasing group</h2>
  </div>

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar isMastheadPage={true} />
        {/* <Hero /> */}
        <MediaBackground 
          image={AirplaneHero} 
          overlay={overlay} />
        <PresidioAelf />
        <MissionStatement />
        <Services />
        <Statistics />
        <WorldMap />
        <PortfolioSlides />
        <RecentTransactions />
      </div>
  );
  }
}

