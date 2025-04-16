import React from 'react';
import styled, { keyframes } from 'styled-components';

interface CardDataProps {
  title: string;
  content: string;
  icon: string;
  link: string;
}

const CardsSection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--background-white);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 90% 10%, rgba(226, 24, 51, 0.05) 0%, transparent 70%);
    z-index: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
  
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

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  padding: 3rem 2rem;
  margin: 1rem;
  width: 30%;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--umd-red);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 500px;
    margin-bottom: 2rem;
  }
`;

const CardIconContainer = styled.div`
  height: 120px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: var(--umd-red);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  display: none; /* Hide the font awesome icons */
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const IconBackground = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(226, 24, 51, 0.05);
  z-index: 0;
  animation: ${pulse} 4s infinite ease-in-out;
`;

const InnovationSvg = styled.svg`
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 1;
  animation: ${float} 6s infinite ease-in-out;
`;

const CompetitionSvg = styled.svg`
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 1;
  animation: ${float} 6s infinite ease-in-out;
  animation-delay: 1s;
`;

const EducationSvg = styled.svg`
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 1;
  animation: ${float} 6s infinite ease-in-out;
  animation-delay: 2s;
`;

const RotatingCircle = styled.circle`
  transform-origin: center;
  animation: ${rotate} 10s linear infinite;
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  text-align: center;
`;

const CardText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CardLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--umd-red);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: var(--umd-red-dark);
  }
  
  i {
    margin-left: 0.5rem;
    transition: transform 0.3s;
  }
  
  &:hover i {
    transform: translateX(4px);
  }
`;

const InfoCards: React.FC = () => {
  const cardData: CardDataProps[] = [
    {
      title: 'Innovation',
      content: 'Developing cutting-edge autonomous systems and advanced flight control algorithms for the future of unmanned aerial technology.',
      icon: 'fas fa-lightbulb',
      link: '/about'
    },
    {
      title: 'Competition',
      content: 'Participating in international competitions and achieving excellence in autonomous flight challenges against top universities.',
      icon: 'fas fa-trophy',
      link: '/about'
    },
    {
      title: 'Education',
      content: 'Training the next generation of aerospace engineers, computer scientists, and robotics specialists through hands-on experience.',
      icon: 'fas fa-graduation-cap',
      link: '/about'
    }
  ];

  return (
    <CardsSection>
      <SectionTitle>What We Do</SectionTitle>
      <CardsContainer>
        <Card>
          <CardIconContainer>
            <IconBackground />
            <InnovationSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Drone body */}
              <rect x="40" y="40" width="20" height="20" fill="#333" rx="2" />
              
              {/* Drone arms */}
              <line x1="30" y1="30" x2="40" y2="40" stroke="#444" strokeWidth="3" />
              <line x1="70" y1="30" x2="60" y2="40" stroke="#444" strokeWidth="3" />
              <line x1="30" y1="70" x2="40" y2="60" stroke="#444" strokeWidth="3" />
              <line x1="70" y1="70" x2="60" y2="60" stroke="#444" strokeWidth="3" />
              
              {/* Propellers */}
              <circle cx="30" cy="30" r="8" fill="#e21833" />
              <circle cx="70" cy="30" r="8" fill="#e21833" />
              <circle cx="30" cy="70" r="8" fill="#e21833" />
              <circle cx="70" cy="70" r="8" fill="#e21833" />
              
              {/* Propeller animations */}
              <g transform="translate(30, 30)">
                <RotatingCircle r="12" fill="none" stroke="#e21833" strokeWidth="1" strokeDasharray="2,2" />
              </g>
              <g transform="translate(70, 30)">
                <RotatingCircle r="12" fill="none" stroke="#e21833" strokeWidth="1" strokeDasharray="2,2" />
              </g>
              <g transform="translate(30, 70)">
                <RotatingCircle r="12" fill="none" stroke="#e21833" strokeWidth="1" strokeDasharray="2,2" />
              </g>
              <g transform="translate(70, 70)">
                <RotatingCircle r="12" fill="none" stroke="#e21833" strokeWidth="1" strokeDasharray="2,2" />
              </g>
              
              {/* Circuit pattern */}
              <path d="M50,25 v-15 h15 v10 h10" stroke="#e21833" strokeWidth="1" fill="none" />
              <path d="M25,50 h-15 v15 h10 v10" stroke="#e21833" strokeWidth="1" fill="none" />
              <circle cx="25" cy="25" r="1" fill="#e21833" />
              <circle cx="50" cy="10" r="1" fill="#e21833" />
              <circle cx="75" cy="20" r="1" fill="#e21833" />
              <circle cx="10" cy="50" r="1" fill="#e21833" />
              <circle cx="20" cy="75" r="1" fill="#e21833" />
            </InnovationSvg>
            <CardIcon>
              <i className="fas fa-lightbulb"></i>
            </CardIcon>
          </CardIconContainer>
          <CardTitle>Innovation</CardTitle>
          <CardText>Developing cutting-edge autonomous systems and advanced flight control algorithms for the future of unmanned aerial technology.</CardText>
          <CardLink href="/about">
            Learn More <i className="fas fa-arrow-right"></i>
          </CardLink>
        </Card>
        
        <Card>
          <CardIconContainer>
            <IconBackground />
            <CompetitionSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Trophy base */}
              <path d="M30,75 h40 v5 h-40 z" fill="#FFD700" />
              <path d="M45,75 v-10 h10 v10 z" fill="#FFD700" />
              
              {/* Trophy cup */}
              <path d="M35,65 v-30 h30 v30 c0,0 -7,10 -15,10 c-8,0 -15,-10 -15,-10 z" fill="#FFD700" stroke="#CC9900" strokeWidth="1" />
              
              {/* Drone racing elements */}
              <circle cx="50" cy="40" r="12" fill="none" stroke="#e21833" strokeWidth="2" />
              <circle cx="50" cy="40" r="8" fill="none" stroke="#e21833" strokeWidth="1" strokeDasharray="2,2" />
              <path d="M35,30 l30,20 M35,50 l30,-20" stroke="#e21833" strokeWidth="2" />
              
              {/* Small racing drone */}
              <g transform="translate(50, 40) scale(0.6)">
                <rect x="-10" y="-10" width="20" height="20" fill="#333" rx="2" />
                <line x1="-20" y1="-20" x2="-10" y2="-10" stroke="#444" strokeWidth="3" />
                <line x1="20" y1="-20" x2="10" y2="-10" stroke="#444" strokeWidth="3" />
                <line x1="-20" y1="20" x2="-10" y2="10" stroke="#444" strokeWidth="3" />
                <line x1="20" y1="20" x2="10" y2="10" stroke="#444" strokeWidth="3" />
                <circle cx="-20" cy="-20" r="5" fill="#e21833" />
                <circle cx="20" cy="-20" r="5" fill="#e21833" />
                <circle cx="-20" cy="20" r="5" fill="#e21833" />
                <circle cx="20" cy="20" r="5" fill="#e21833" />
              </g>
              
              {/* Race flags */}
              <rect x="15" y="20" width="10" height="6" fill="#000" />
              <rect x="15" y="26" width="10" height="6" fill="#fff" />
              <rect x="75" y="20" width="10" height="6" fill="#000" />
              <rect x="75" y="26" width="10" height="6" fill="#fff" />
            </CompetitionSvg>
            <CardIcon>
              <i className="fas fa-trophy"></i>
            </CardIcon>
          </CardIconContainer>
          <CardTitle>Competition</CardTitle>
          <CardText>Participating in international competitions and achieving excellence in autonomous flight challenges against top universities.</CardText>
          <CardLink href="/about">
            Learn More <i className="fas fa-arrow-right"></i>
          </CardLink>
        </Card>
        
        <Card>
          <CardIconContainer>
            <IconBackground />
            <EducationSvg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Graduation cap */}
              <path d="M20,50 l30,-15 l30,15 l-30,15 z" fill="#444" />
              <rect x="48" y="50" width="4" height="20" fill="#444" />
              <path d="M30,55 v10 c0,0 10,10 20,10 c10,0 20,-10 20,-10 v-10" fill="none" stroke="#444" strokeWidth="2" />
              
              {/* Drone schematic */}
              <g transform="translate(50, 35) scale(0.5)">
                <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="#e21833" strokeWidth="2" strokeDasharray="2,2" />
                <line x1="-20" y1="-20" x2="-10" y2="-10" stroke="#e21833" strokeWidth="2" />
                <line x1="20" y1="-20" x2="10" y2="-10" stroke="#e21833" strokeWidth="2" />
                <line x1="-20" y1="20" x2="-10" y2="10" stroke="#e21833" strokeWidth="2" />
                <line x1="20" y1="20" x2="10" y2="10" stroke="#e21833" strokeWidth="2" />
                <circle cx="-20" cy="-20" r="5" fill="none" stroke="#e21833" strokeWidth="1" />
                <circle cx="20" cy="-20" r="5" fill="none" stroke="#e21833" strokeWidth="1" />
                <circle cx="-20" cy="20" r="5" fill="none" stroke="#e21833" strokeWidth="1" />
                <circle cx="20" cy="20" r="5" fill="none" stroke="#e21833" strokeWidth="1" />
              </g>
              
              {/* Educational elements */}
              <circle cx="25" cy="25" r="3" fill="#e21833" />
              <text x="30" y="28" fontSize="5" fill="#e21833">R1</text>
              <circle cx="75" cy="25" r="3" fill="#e21833" />
              <text x="80" y="28" fontSize="5" fill="#e21833">R2</text>
              <path d="M15,80 h70" stroke="#e21833" strokeWidth="1" strokeDasharray="3,1" />
              <text x="20" y="85" fontSize="5" fill="#e21833">X-AXIS</text>
              <path d="M20,15 v70" stroke="#e21833" strokeWidth="1" strokeDasharray="3,1" />
              <text x="10" y="20" fontSize="5" fill="#e21833">Y</text>
            </EducationSvg>
            <CardIcon>
              <i className="fas fa-graduation-cap"></i>
            </CardIcon>
          </CardIconContainer>
          <CardTitle>Education</CardTitle>
          <CardText>Training the next generation of aerospace engineers, computer scientists, and robotics specialists through hands-on experience.</CardText>
          <CardLink href="/about">
            Learn More <i className="fas fa-arrow-right"></i>
          </CardLink>
        </Card>
      </CardsContainer>
    </CardsSection>
  );
};

export default InfoCards; 