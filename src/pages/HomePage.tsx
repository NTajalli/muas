import React from 'react';
import Hero from '../components/sections/Hero';
import InfoCards from '../components/sections/InfoCards';
import About from '../components/sections/About';
import SuasCompetition from '../components/sections/SuasCompetition';
import Team from '../components/sections/Team';
import DroneTechShowcase from '../components/sections/DroneTechShowcase';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <InfoCards />
      <About />
      <DroneTechShowcase />
      <SuasCompetition />
      <Team />
    </>
  );
};

export default HomePage; 