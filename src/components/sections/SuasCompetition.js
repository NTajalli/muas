import React from 'react';
import styled from 'styled-components';

const SuasSection = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  line-height: 1.8;
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ObjectiveTitle = styled.h3`
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: #333;
`;

const ObjectiveList = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 2rem;
`;

const ObjectiveItem = styled.li`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #444;
`;

const SuasCompetition = () => {
  return (
    <SuasSection>
      <SectionTitle>SUAS Competition</SectionTitle>
      <Description>
        The Student Unmanned Aerial Systems (SUAS) Competition challenges teams to design, integrate, report 
        on, and demonstrate a UAS capable of autonomous flight and navigation, remote sensing, and payload 
        delivery.
      </Description>
      <ObjectiveTitle>Main Objectives:</ObjectiveTitle>
      <ObjectiveList>
        <ObjectiveItem>
          <strong>Flying Waypoint Laps</strong> - Autonomous navigation through predefined waypoints
        </ObjectiveItem>
        <ObjectiveItem>
          <strong>Mapping of Course</strong> - Creating detailed aerial maps of the competition area
        </ObjectiveItem>
        <ObjectiveItem>
          <strong>Object Detection & Classification</strong> - Identifying and categorizing ground objects
        </ObjectiveItem>
        <ObjectiveItem>
          <strong>Payload Airdrop</strong> - Precise delivery of payloads to designated locations
        </ObjectiveItem>
      </ObjectiveList>
    </SuasSection>
  );
};

export default SuasCompetition; 