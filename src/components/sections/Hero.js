import React from 'react';
import styled, { keyframes } from 'styled-components';
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
    animation: scrollAnimation 2s infinite;
  }
  
  @keyframes scrollAnimation {
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
  }
`;

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitleContainer>
          <HeroSupertitle>University of Maryland</HeroSupertitle>
          <HeroTitle>
            Unmanned Aerial Systems (MUAS) Team
          </HeroTitle>
        </HeroTitleContainer>
        <HeroSubtitle>
          Pushing the boundaries of autonomous flight technology through innovation, 
          competition, and education.
        </HeroSubtitle>
        <HeroButtons>
          <PrimaryButton href="/about">Learn More</PrimaryButton>
          <SecondaryButton href="/contact">Join Our Team</SecondaryButton>
        </HeroButtons>
      </HeroContent>
      
      <ScrollIndicator onClick={scrollToContent}>
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero; 