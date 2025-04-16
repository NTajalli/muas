import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;

const LogoText = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: #e21833; // UMD red color
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #e21833; // UMD red color
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer style={{ boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : '' }}>
      <Logo>
        <img src={logo} alt="UMD MUAS Logo" />
        <LogoText>UMD MUAS</LogoText>
      </Logo>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/sponsor">Sponsor</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/news">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 