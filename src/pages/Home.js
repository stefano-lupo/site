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
import MediaBackgroundOverlay from '../components/MediaBackgroundOverlay';

import AirplaneHero from '../assets/img/header/airplane-wing-bw.jpg';

const OLD_HOME_PAGE = 
  <div>
    <NavigationBar />
    {/* <Hero /> */}
    <MediaBackground 
      overlay={
        <MediaBackgroundOverlay 
          title="AELF & Presidio" 
          body={<h2>We are a full-service commercial aircraft leasing group</h2>} 
        />
      }
      image={AirplaneHero} />
    <PresidioAelf />
    <MissionStatement />
    <Services />
    <Statistics />
    <WorldMap />
    <PortfolioSlides />
    <RecentTransactions />
  </div>

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <MediaBackground 
          overlay={
            <MediaBackgroundOverlay 
              title="AELF & Presidio" 
              body={<h2>We are a full-service commercial aircraft leasing group</h2>} 
            />
          }
          image={AirplaneHero} />
        <PresidioAelf />
        <MissionStatement />
        <Services />
        <Statistics />
        <WorldMap />
        <PortfolioSlides />
        {/* <RecentTransactions /> */}
      </div>
  );
  }
}

