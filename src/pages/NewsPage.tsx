import React from 'react';
import styled from 'styled-components';
import News from '../components/sections/News';

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

const NewsPage: React.FC = () => {
  return (
    <>
      <PageBanner>
        <PageTitle>News & Updates</PageTitle>
        <PageDescription>
          Stay up to date with the latest developments, achievements, and announcements
          from the University of Maryland Unmanned Aerial Systems Team.
        </PageDescription>
      </PageBanner>
      <News />
    </>
  );
};

export default NewsPage; 