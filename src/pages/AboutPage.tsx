import React from 'react';
import styled from 'styled-components';
import About from '../components/sections/About';
import SuasCompetition from '../components/sections/SuasCompetition';
import Team from '../components/sections/Team';

const PageBanner = styled.div`
  background-color: #f5f5f5;
  padding: 4rem 2rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <>
      <PageBanner>
        <PageTitle>About Us</PageTitle>
        <PageDescription>
          Learn more about the University of Maryland Unmanned Aerial Systems Team and our mission
          to push the boundaries of autonomous flight technology.
        </PageDescription>
      </PageBanner>
      <About />
      <SuasCompetition />
      <Team />
    </>
  );
};

export default AboutPage; 