import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ObjectiveProps {
  id: number;
  title: string;
  icon: string;
  description: string;
  mapFeatures: string;
}

interface StyledProps {
  active?: boolean;
  shown?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
}

const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
`;

const SuasSection = styled.section`
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  background-color: white;
  position: relative;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContentColumn = styled.div`
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const VisualColumn = styled.div`
  position: relative;
  background-color: #f0f6ff;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  @media (max-width: 992px) {
    min-height: 400px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #222;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--umd-red);
    margin-top: 0.75rem;
    border-radius: 2px;
  }
  
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

const ObjectivesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ObjectiveCard = styled.div<StyledProps>`
  background-color: ${props => props.active ? 'var(--umd-red)' : '#f7f7f7'};
  padding: 1.25rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    background-color: ${props => props.active ? 'var(--umd-red)' : '#f0f0f0'};
  }
`;

const ObjectiveTitle = styled.h4<StyledProps>`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: ${props => props.active ? 'white' : '#222'};
  display: flex;
  align-items: center;
  
  i {
    margin-right: 0.75rem;
    font-size: 1.25rem;
  }
`;

const ObjectiveText = styled.p<StyledProps>`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : '#555'};
`;

const CompetitionMap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  background-color: #e9f0f9;
  border-radius: 8px;
  border: 2px solid #ccd9e6;
  overflow: hidden;
`;

const MapGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  pointer-events: none;
`;

const GridLine = styled.div<StyledProps>`
  border-right: ${props => props.vertical ? '1px dashed rgba(0, 88, 155, 0.15)' : 'none'};
  border-bottom: ${props => props.horizontal ? '1px dashed rgba(0, 88, 155, 0.15)' : 'none'};
`;

const MapFeature = styled.div<StyledProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: all 0.5s ease;
  ${props => props.shown ? 'opacity: 1;' : 'opacity: 0;'}
`;

const Waypoint = styled(MapFeature)`
  width: 16px;
  height: 16px;
  background-color: var(--umd-red);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 2px rgba(226, 24, 51, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(226, 24, 51, 0.15);
    animation: ${pulse} 2s infinite;
  }
`;

const Target = styled(MapFeature)`
  width: 20px;
  height: 20px;
  border: 2px solid #ff6b00;
  box-shadow: 0 0 0 2px rgba(255, 107, 0, 0.3);
  transform: translate(-50%, -50%) rotate(45deg);
`;

const DropZone = styled(MapFeature)`
  width: 24px;
  height: 24px;
  background-color: rgba(0, 162, 184, 0.9);
  border-radius: 50%;
  border: 2px solid white;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }
`;

const FlightPath = styled.svg<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  
  path {
    fill: none;
    stroke: var(--umd-red);
    stroke-width: 2;
    stroke-dasharray: 8, 4;
    opacity: ${props => props.shown ? 0.7 : 0};
    transition: opacity 0.5s ease;
  }
`;

const SuasCompetition: React.FC = () => {
  const [activeObjective, setActiveObjective] = useState<number>(1);
  
  const objectives: ObjectiveProps[] = [
    {
      id: 1,
      title: 'Autonomous Navigation',
      icon: 'fas fa-route',
      description: 'Navigate through predefined waypoints autonomously with precise GPS coordination',
      mapFeatures: 'waypoints'
    },
    {
      id: 2,
      title: 'Object Detection',
      icon: 'fas fa-search',
      description: 'Identify and classify ground targets using computer vision and deep learning',
      mapFeatures: 'targets'
    },
    {
      id: 3,
      title: 'Mapping Course',
      icon: 'fas fa-map',
      description: 'Create detailed aerial maps by stitching drone imagery with geospatial processing',
      mapFeatures: 'path'
    },
    {
      id: 4,
      title: 'Payload Delivery',
      icon: 'fas fa-parachute-box',
      description: 'Precisely drop payloads at designated targets with computer-controlled release',
      mapFeatures: 'dropzones'
    }
  ];
  
  return (
    <SuasSection>
      <SectionGrid>
        <ContentColumn>
          <SectionTitle>SUAS Competition</SectionTitle>
          <Description>
            The Student Unmanned Aerial Systems (SUAS) Competition challenges teams to design, integrate, and demonstrate 
            autonomous aircraft capabilities including navigation, object recognition, and precision delivery.
          </Description>
          <ObjectivesList>
            {objectives.map(objective => (
              <ObjectiveCard 
                key={objective.id} 
                active={activeObjective === objective.id}
                onClick={() => setActiveObjective(objective.id)}
              >
                <ObjectiveTitle active={activeObjective === objective.id}>
                  <i className={objective.icon}></i> {objective.title}
                </ObjectiveTitle>
                <ObjectiveText active={activeObjective === objective.id}>
                  {objective.description}
                </ObjectiveText>
              </ObjectiveCard>
            ))}
          </ObjectivesList>
        </ContentColumn>
        <VisualColumn>
          <CompetitionMap>
            <MapContainer>
              <MapGrid>
                {[...Array(100)].map((_, i) => (
                  <GridLine 
                    key={i} 
                    vertical={i % 10 !== 9} 
                    horizontal={i < 90}
                  />
                ))}
              </MapGrid>
              
              {/* Waypoints */}
              <Waypoint style={{top: '20%', left: '30%'}} shown={activeObjective === 1} />
              <Waypoint style={{top: '35%', left: '50%'}} shown={activeObjective === 1} />
              <Waypoint style={{top: '60%', left: '70%'}} shown={activeObjective === 1} />
              <Waypoint style={{top: '75%', left: '45%'}} shown={activeObjective === 1} />
              <Waypoint style={{top: '40%', left: '20%'}} shown={activeObjective === 1} />
              
              {/* Targets */}
              <Target style={{top: '30%', left: '60%'}} shown={activeObjective === 2} />
              <Target style={{top: '65%', left: '35%'}} shown={activeObjective === 2} />
              <Target style={{top: '50%', left: '75%'}} shown={activeObjective === 2} />
              <Target style={{top: '25%', left: '40%'}} shown={activeObjective === 2} />
              
              {/* Drop Zones */}
              <DropZone style={{top: '55%', left: '55%'}} shown={activeObjective === 4} />
              <DropZone style={{top: '35%', left: '25%'}} shown={activeObjective === 4} />
              <DropZone style={{top: '70%', left: '65%'}} shown={activeObjective === 4} />
              
              {/* Flight Path */}
              <FlightPath shown={activeObjective === 3} xmlns="http://www.w3.org/2000/svg">
                <path d="M50,150 C100,50 200,100 300,150 S450,250 600,200 S750,100 850,200" />
              </FlightPath>
            </MapContainer>
          </CompetitionMap>
        </VisualColumn>
      </SectionGrid>
    </SuasSection>
  );
};

export default SuasCompetition; 