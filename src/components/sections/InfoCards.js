import React from 'react';
import styled from 'styled-components';

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

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: var(--umd-red);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
`;

const CardText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
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

const InfoCards = () => {
  const cardData = [
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
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardIcon>
              <i className={card.icon}></i>
            </CardIcon>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.content}</CardText>
            <CardLink href={card.link}>
              Learn More <i className="fas fa-arrow-right"></i>
            </CardLink>
          </Card>
        ))}
      </CardsContainer>
    </CardsSection>
  );
};

export default InfoCards; 