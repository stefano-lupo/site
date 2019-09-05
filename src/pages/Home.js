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

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar isMastheadPage={true} />
        <Hero />
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

