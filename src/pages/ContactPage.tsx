import React from 'react';
import styled from 'styled-components';
import Contact from '../components/sections/Contact';

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

const ContactPage: React.FC = () => {
  return (
    <>
      <PageBanner>
        <PageTitle>Contact Us</PageTitle>
        <PageDescription>
          Have questions or want to get involved? We'd love to hear from you!
          Reach out to the University of Maryland Unmanned Aerial Systems Team.
        </PageDescription>
      </PageBanner>
      <Contact />
    </>
  );
};

export default ContactPage; 