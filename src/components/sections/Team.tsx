import React from 'react';
import styled from 'styled-components';
import matthewImage from '../../assets/images/Matthew_Chmielewski.png';
import isaiahImage from '../../assets/images/Isaiah_Lee.png';
import michaelSuhImage from '../../assets/images/michael_suh.png';
import kiranImage from '../../assets/images/Kiran_Kothari.png';
import ishmaelImage from '../../assets/images/Ishmael_Agui.png';
import michaelChunImage from '../../assets/images/Michael_Chun.png';
import brianImage from '../../assets/images/Brian_Tran.png';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

const TeamMember = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  ${TeamMember}:hover & img {
    transform: scale(1.05);
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const MemberRole = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const SubteamTitle = styled.h3`
  font-size: 1.8rem;
  margin: 3rem 0 2rem;
  color: #333;
  text-align: center;
`;

const Team: React.FC = () => {
  const executiveMembers: TeamMemberProps[] = [
    {
      name: 'Matthew Chmielewski',
      role: 'President',
      image: matthewImage
    },
    {
      name: 'Isaiah Lee',
      role: 'Vice President (External Affairs)',
      image: isaiahImage
    },
    {
      name: 'Michael Suh',
      role: 'Vice President (Internal Affairs)',
      image: michaelSuhImage
    },
    {
      name: 'Kiran Kothari',
      role: 'Chief Engineer',
      image: kiranImage
    }
  ];

  const subteamLeads: TeamMemberProps[] = [
    {
      name: 'Ishmael Agui',
      role: 'Hardware Lead',
      image: ishmaelImage
    },
    {
      name: 'Michael Chun',
      role: 'Software Lead',
      image: michaelChunImage
    },
    {
      name: 'Brian Tran',
      role: 'Operations and Aquisitions Manager',
      image: brianImage
    }
  ];

  return (
    <TeamSection>
      <SectionTitle>Executive Board</SectionTitle>
      <TeamGrid>
        {executiveMembers.map((member, index) => (
          <TeamMember key={index}>
            <MemberImage>
              <img src={member.image} alt={member.name} />
            </MemberImage>
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>

      <SubteamTitle>Sub Team Leads</SubteamTitle>
      <TeamGrid>
        {subteamLeads.map((member, index) => (
          <TeamMember key={index}>
            <MemberImage>
              <img src={member.image} alt={member.name} />
            </MemberImage>
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>
    </TeamSection>
  );
};

export default Team; 