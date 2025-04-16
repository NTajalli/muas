import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface FeatureProps {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface StyledProps {
  active?: boolean;
  visible?: boolean;
  length?: string;
  top?: string;
  left?: string;
  transform?: string;
  position?: string;
}

const rotateAround = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const ShowcaseSection = styled.section`
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  padding: 5rem 0;
  color: white;
  position: relative;
  overflow: hidden;
`;

const ShowcaseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: var(--umd-red);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ShowcaseText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const TechFeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TechFeature = styled.div<StyledProps>`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;
  border-left: 3px solid ${props => props.active ? 'var(--umd-red)' : 'transparent'};
  
  &:hover {
    transform: translateX(5px);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(226, 24, 51, 0.2);
  border-radius: 50%;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: var(--umd-red);
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const ShowcaseVisual = styled.div`
  position: relative;
  height: 500px;
  perspective: 1000px;
  
  @media (max-width: 992px) {
    order: 1;
    height: 400px;
  }
`;

const DroneModelContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  animation: ${float} 6s infinite ease-in-out;
`;

const DroneModel = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  animation: ${rotateAround} 20s infinite linear;
  
  @media (max-width: 576px) {
    width: 250px;
    height: 250px;
  }
`;

const DronePart = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const DroneBody = styled(DronePart)`
  width: 120px;
  height: 120px;
  background-color: #333;
  top: 90px;
  left: 90px;
  border-radius: 10px;
  transform: translateZ(10px);
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-color: rgba(226, 24, 51, 0.8);
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
  }
  
  @media (max-width: 576px) {
    width: 100px;
    height: 100px;
    top: 75px;
    left: 75px;
  }
`;

const DroneArm = styled(DronePart)<StyledProps>`
  width: ${props => props.length || '100px'};
  height: 15px;
  background-color: #555;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  transform: ${props => props.transform || 'none'};
`;

const DronePropeller = styled(DronePart)<StyledProps>`
  width: 40px;
  height: 40px;
  background-color: rgba(226, 24, 51, 0.9);
  border-radius: 50%;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  transform: ${props => props.transform || 'none'};
  box-shadow: 0 0 15px rgba(226, 24, 51, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    transform: translateY(-50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    background-color: #fff;
    transform: translateX(-50%);
  }
`;

const TechSpecs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const TechLabel = styled.div<StyledProps>`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(226, 24, 51, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: white;
  box-shadow: 0 0 10px rgba(226, 24, 51, 0.3);
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 0.3s ease;
  transform: ${props => props.position || 'none'};
  
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: var(--umd-red);
    border-radius: 50%;
  }
`;

const BackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
`;

const DroneTechShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('autonomy');
  
  const features: FeatureProps[] = [
    {
      id: 'autonomy',
      title: 'Autonomous Navigation',
      icon: 'fas fa-satellite',
      description: 'Advanced GPS and computer vision systems allow our drones to navigate complex environments without human intervention.'
    },
    {
      id: 'vision',
      title: 'Computer Vision',
      icon: 'fas fa-eye',
      description: 'Deep learning algorithms enable real-time object detection and classification from aerial imagery.'
    },
    {
      id: 'control',
      title: 'Flight Control Systems',
      icon: 'fas fa-gamepad',
      description: 'Custom PID controllers and sensor fusion for stable flight even in challenging weather conditions.'
    },
    {
      id: 'precision',
      title: 'Precision Delivery',
      icon: 'fas fa-crosshairs',
      description: 'Advanced targeting systems for accurate payload delivery with centimeter-level precision.'
    }
  ];
  
  return (
    <ShowcaseSection>
      <BackgroundGrid />
      
      <ShowcaseContainer>
        <SectionTitle>Advanced Drone Technology</SectionTitle>
        
        <GridContainer>
          <ShowcaseText>
            <TechFeaturesList>
              {features.map(feature => (
                <TechFeature 
                  key={feature.id}
                  active={feature.id === activeFeature}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <FeatureIcon>
                    <i className={feature.icon}></i>
                  </FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureContent>
                </TechFeature>
              ))}
            </TechFeaturesList>
          </ShowcaseText>
          
          <ShowcaseVisual>
            <DroneModelContainer>
              <DroneModel>
                {/* Drone Body */}
                <DroneBody />
                
                {/* Arms */}
                <DroneArm top="142px" left="60px" length="100px" transform="rotate(135deg)" />
                <DroneArm top="142px" left="140px" length="100px" transform="rotate(45deg)" />
                <DroneArm top="57px" left="60px" length="100px" transform="rotate(225deg)" />
                <DroneArm top="57px" left="140px" length="100px" transform="rotate(315deg)" />
                
                {/* Propellers */}
                <DronePropeller top="30px" left="30px" transform="translateZ(20px)" />
                <DronePropeller top="30px" left="230px" transform="translateZ(20px)" />
                <DronePropeller top="230px" left="30px" transform="translateZ(20px)" />
                <DronePropeller top="230px" left="230px" transform="translateZ(20px)" />
              </DroneModel>
            </DroneModelContainer>
            
            <TechSpecs>
              <svg xmlns="http://www.w3.org/2000/svg">
                {/* Lines connecting labels to drone parts */}
                <line 
                  x1="150" y1="150" x2="70" y2="50" 
                  stroke={activeFeature === 'vision' ? 'rgba(226, 24, 51, 0.8)' : 'rgba(255, 255, 255, 0.2)'} 
                  strokeWidth="1" 
                  strokeDasharray="5,5" 
                />
                <line 
                  x1="150" y1="150" x2="230" y2="50" 
                  stroke={activeFeature === 'autonomy' ? 'rgba(226, 24, 51, 0.8)' : 'rgba(255, 255, 255, 0.2)'} 
                  strokeWidth="1" 
                  strokeDasharray="5,5" 
                />
                <line 
                  x1="150" y1="150" x2="70" y2="350" 
                  stroke={activeFeature === 'control' ? 'rgba(226, 24, 51, 0.8)' : 'rgba(255, 255, 255, 0.2)'} 
                  strokeWidth="1" 
                  strokeDasharray="5,5" 
                />
                <line 
                  x1="150" y1="150" x2="230" y2="350" 
                  stroke={activeFeature === 'precision' ? 'rgba(226, 24, 51, 0.8)' : 'rgba(255, 255, 255, 0.2)'} 
                  strokeWidth="1" 
                  strokeDasharray="5,5" 
                />
              </svg>
              
              {/* Tech Labels */}
              <TechLabel visible={activeFeature === 'vision'} position="translate(20px, 50px)">
                Computer Vision<br/>Camera System
              </TechLabel>
              
              <TechLabel visible={activeFeature === 'autonomy'} position="translate(200px, 50px)">
                GPS Navigation<br/>± 2cm Accuracy
              </TechLabel>
              
              <TechLabel visible={activeFeature === 'control'} position="translate(20px, 350px)">
                Flight Controller<br/>500Hz Update Rate
              </TechLabel>
              
              <TechLabel visible={activeFeature === 'precision'} position="translate(200px, 350px)">
                Precision Delivery<br/>Targeting System
              </TechLabel>
            </TechSpecs>
          </ShowcaseVisual>
        </GridContainer>
      </ShowcaseContainer>
    </ShowcaseSection>
  );
};

export default DroneTechShowcase; 