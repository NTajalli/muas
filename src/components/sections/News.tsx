import React, { FormEvent } from 'react';
import styled from 'styled-components';
import droneBackground from '../../assets/images/drone_background.png';

const NewsSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
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

const ComingSoonContainer = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 4rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ComingSoonTitle = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ComingSoonText = styled.p`
  color: #555;
  line-height: 1.6;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const SubscribeContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const SubscribeForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubscribeInput = styled.input`
  flex: 1;
  min-width: 250px;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #e21833;
    box-shadow: 0 0 0 3px rgba(226, 24, 51, 0.1);
  }
`;

const SubscribeButton = styled.button`
  background-color: #e21833;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #c21126;
  }
`;

const News: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <NewsSection>
      <SectionTitle>Latest News</SectionTitle>
      <ComingSoonContainer>
        <ComingSoonTitle>News updates coming soon!</ComingSoonTitle>
        <ComingSoonText>
          We're currently working on exciting projects and competitions. 
          Stay tuned for updates on our progress, achievements, and upcoming events.
        </ComingSoonText>
        <SubscribeContainer>
          <SubscribeForm onSubmit={handleSubmit}>
            <SubscribeInput 
              type="email" 
              placeholder="Enter your email for updates" 
              aria-label="Email for news updates"
            />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </SubscribeForm>
        </SubscribeContainer>
      </ComingSoonContainer>
    </NewsSection>
  );
};

export default News; 