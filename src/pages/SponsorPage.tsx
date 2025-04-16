import React from 'react';
import styled from 'styled-components';
import Sponsors from '../components/sections/Sponsors';

const PageBanner = styled.div`
  background-color: #f0f0f0;
  padding: 5rem 2rem;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
`;

const PageTitle = styled.h1`
  font-size: 3.2rem;
  color: #222;
  margin-bottom: 1.5rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.3rem;
  color: #444;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SponsorPage: React.FC = () => {
  return (
    <>
      <PageBanner>
        <PageTitle>Sponsorship</PageTitle>
        <PageDescription>
          Our team relies on the generous support of sponsors to pursue innovation
          in unmanned aerial systems technology. Learn how you can support our mission.
        </PageDescription>
      </PageBanner>
      <Sponsors />
    </>
  );
};

export default SponsorPage; 