import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 3rem 0 2rem;
  border-top: 1px solid #e9ecef;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #e21833;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1.2rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterItem = styled.li`
  margin-bottom: 0.8rem;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #666;
  transition: color 0.3s;
  
  &:hover {
    color: #e21833;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #666;
  transition: color 0.3s;
  
  &:hover {
    color: #e21833;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #666;
  font-size: 1.5rem;
  transition: color 0.3s;
  
  &:hover {
    color: #e21833;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #e9ecef;
  margin: 2rem 0;
`;

const BottomText = styled.div`
  text-align: center;
  color: #6c757d;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>UMD MUAS</FooterLogo>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Pushing the boundaries of autonomous flight technology at the University of Maryland.
          </p>
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/company/maryland-uas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/umdmuas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="mailto:umdmuas@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterList>
            <FooterItem>
              <FooterLink to="/">Home</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/about">About Us</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/sponsor">Sponsorship</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/news">News</FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterList>
            <FooterItem>
              <ExternalLink href="mailto:umdmuas@gmail.com">
                umdmuas@gmail.com
              </ExternalLink>
            </FooterItem>
            <FooterItem>
              <ExternalLink href="https://www.google.com/maps/place/A.+James+Clark+School+of+Engineering" target="_blank" rel="noopener noreferrer">
                A. James Clark School of Engineering,<br />
                University of Maryland,<br />
                College Park, MD 20742
              </ExternalLink>
            </FooterItem>
          </FooterList>
        </FooterSection>
      </FooterContent>
      
      <Divider />
      
      <BottomText>
        <p>© {currentYear} University of Maryland Unmanned Aerial Systems Team. All rights reserved.</p>
      </BottomText>
    </FooterContainer>
  );
};

export default Footer; 