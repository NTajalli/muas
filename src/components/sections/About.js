import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutContent = styled.div`
  line-height: 1.8;
  color: #444;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SuasLink = styled.a`
  color: #e21833;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <SectionTitle>About Our Team</SectionTitle>
      <AboutContent>
        <p>
          The University of Maryland Unmanned Aerial Systems Team is a student-run organization dedicated to the 
          development of autonomous aircraft systems. Our team consists of passionate students from various 
          engineering disciplines working together to push the boundaries of what's possible in autonomous flight. While 
          our operations were shut down during the pandemic, we are excited to be competing in the{' '}
          <SuasLink href="https://suas-competition.org/" target="_blank" rel="noopener noreferrer">
            2025 SUAS competition
          </SuasLink>.
        </p>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 