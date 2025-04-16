import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import droneBackground from '../../assets/images/drone_background.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContainer = styled.section`
  position: relative;
  height: 85vh;
  min-height: 600px;
  background-image: url(${droneBackground});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg, 
      rgba(0, 0, 0, 0.85) 0%, 
      rgba(0, 0, 0, 0.8) 50%, 
      rgba(226, 24, 51, 0.7) 100%
    );
  }
  
  @media (max-width: 768px) {
    height: 70vh;
    min-height: 500px;
    background-attachment: scroll;
    
    &::before {
      background: linear-gradient(
        135deg, 
        rgba(0, 0, 0, 0.9) 0%, 
        rgba(0, 0, 0, 0.85) 50%, 
        rgba(226, 24, 51, 0.75) 100%
      );
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin-left: 5rem;
  animation: ${fadeIn} 1s ease-out forwards;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 1.5rem;
    text-align: center;
  }
`;

const HeroTitleContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const HeroSupertitle = styled.div`
  display: inline-block;
  background-color: rgba(226, 24, 51, 0.9);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  border-radius: 4px;
  text-shadow: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  max-width: 600px;
  color: white;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: var(--umd-red);
  color: white;
  padding: 0.85rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-shadow: none;
  
  &:hover {
    background-color: var(--umd-red-dark);
    transform: translateY(-2px);
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.85rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  border: 2px solid white;
  transition: transform 0.3s, background-color 0.3s, border-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  text-shadow: none;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s;
  z-index: 2;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
  }
  
  @media (max-height: 500px) {
    display: none;
  }
`;

const ScrollText = styled.span`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const scrollAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, 15px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 15px);
  }
`;

const ScrollIcon = styled.div`
  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 25px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: ${scrollAnimation} 2s infinite;
  }
`;

const DronePathOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;
`;

const moveAlong = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const pulseDot = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.3;
  }
`;

const droneFly = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -15px) rotate(5deg);
  }
  50% {
    transform: translate(0, -30px) rotate(0deg);
  }
  75% {
    transform: translate(-20px, -15px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`;

const StyledAnimatedPath = styled.path`
  animation: ${moveAlong} 15s infinite linear;
`;

interface StyledPulsingCircleProps {
  animationDelay?: string;
}

const StyledPulsingCircle = styled.circle<StyledPulsingCircleProps>`
  animation: ${pulseDot} 3s infinite ease-in-out;
  animation-delay: ${props => props.animationDelay || '0s'};
`;

const StyledFlyingGroup = styled.g`
  animation: ${droneFly} 8s infinite ease-in-out;
  transform-origin: center;
  transform-box: fill-box;
`;

const Hero: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  
  const scrollToContent = (): void => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    const animateDrone = (): void => {
      if (svgRef.current) {
        const dronePath = svgRef.current.querySelector('#dronePath') as SVGPathElement;
        if (dronePath) {
          const pathLength = dronePath.getTotalLength();
          dronePath.style.strokeDasharray = pathLength.toString();
          dronePath.style.strokeDashoffset = pathLength.toString();
        }
      }
    };
    
    animateDrone();
  }, []);

  return (
    <HeroContainer>
      <DronePathOverlay>
        <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
          <StyledAnimatedPath 
            id="dronePath" 
            d="M100,400 C150,200 300,100 500,300 S750,600 900,400" 
            fill="none" 
            stroke="rgba(255,255,255,0.4)" 
            strokeWidth="3" 
            strokeDasharray="1000"
            strokeLinecap="round"
          />
          
          {/* Waypoint markers */}
          <StyledPulsingCircle 
            cx="100" 
            cy="400" 
            r="8" 
            fill="rgba(226,24,51,0.8)" 
          />
          <StyledPulsingCircle 
            cx="500" 
            cy="300" 
            r="8" 
            fill="rgba(226,24,51,0.8)" 
            animationDelay="1s"
          />
          <StyledPulsingCircle 
            cx="900" 
            cy="400" 
            r="8" 
            fill="rgba(226,24,51,0.8)" 
            animationDelay="2s"
          />
          
          {/* Drone icon */}
          <StyledFlyingGroup>
            <path d="M500,150 L515,165 L500,180 L485,165 Z" fill="white" />
            <circle cx="500" cy="165" r="5" fill="rgba(226,24,51,1)" />
          </StyledFlyingGroup>
          
          {/* Grid lines for map effect */}
          <path d="M0,200 H1000" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M0,400 H1000" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M0,600 H1000" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M200,0 V800" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M400,0 V800" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M600,0 V800" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M800,0 V800" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </DronePathOverlay>
      
      <HeroContent>
        <HeroTitleContainer>
          <HeroSupertitle>University of Maryland</HeroSupertitle>
          <HeroTitle>Unmanned Aerial Systems Team</HeroTitle>
        </HeroTitleContainer>
        <HeroSubtitle>
          Building the future of autonomous flight through innovation, competition, and education
        </HeroSubtitle>
        <HeroButtons>
          <PrimaryButton href="#contact">Join Our Team</PrimaryButton>
          <SecondaryButton href="#about">Learn More</SecondaryButton>
        </HeroButtons>
      </HeroContent>
      
      <ScrollIndicator onClick={scrollToContent}>
        <ScrollText>Explore</ScrollText>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero; 