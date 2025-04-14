import React, { useState } from 'react';
import styled from 'styled-components';
import clarkLogo from '../../assets/images/james_clark_logo.png';
import emailjs from '@emailjs/browser';

const SponsorsSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const SponsorLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const SponsorLogo = styled.div`
  padding: 1.5rem;
  
  img {
    max-width: 200px;
    max-height: 100px;
    object-fit: contain;
    filter: grayscale(20%);
    transition: filter 0.3s, transform 0.3s;
  }
  
  &:hover img {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    
    img {
      max-width: 150px;
      max-height: 75px;
    }
  }
`;

const SupportSection = styled.div`
  margin-top: 4rem;
  padding: 0 2rem;
`;

const SupportTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WhySponsor = styled.div`
  margin-bottom: 3rem;
  text-align: left;
`;

const WhySponsorTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const WhySponsorText = styled.p`
  line-height: 1.8;
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  margin: 0 auto;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
  font-size: 1.1rem;
  text-align: left;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-color: #fff;
  
  &:focus {
    outline: none;
    border-color: #e21833;
    box-shadow: 0 0 0 2px rgba(226, 24, 51, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.95rem;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-color: #fff;
  
  &:focus {
    outline: none;
    border-color: #e21833;
    box-shadow: 0 0 0 2px rgba(226, 24, 51, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.95rem;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #e21833;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #c8102e;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.75rem;
    font-size: 1rem;
  }
`;

const SuccessMessage = styled.div`
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
`;

const Sponsors = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message
      };

      // For production, uncomment this and replace with your EmailJS credentials
      /* 
      await emailjs.send(
        'YOUR_SERVICE_ID',  // Create this in EmailJS dashboard
        'YOUR_TEMPLATE_ID', // Create this in EmailJS dashboard
        templateParams,
        'YOUR_PUBLIC_KEY'   // Get this from EmailJS dashboard
      );
      */

      // For development/demo purposes: simulate a successful API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SponsorsSection id="sponsors">
      <SectionTitle>Our Sponsors</SectionTitle>
      <SponsorLogos>
        <SponsorLogo>
          <img src={clarkLogo} alt="James Clark School of Engineering" />
        </SponsorLogo>
        {/* Add more sponsor logos here */}
      </SponsorLogos>
      
      <SupportSection>
        <SupportTitle>Become a Sponsor</SupportTitle>
        
        <WhySponsor>
          <WhySponsorTitle>Why Sponsor Us?</WhySponsorTitle>
          <WhySponsorText>
            By sponsoring the University of Maryland Micro Air Vehicle Lab, you're investing in the future of aviation and robotics technology. Our students are developing innovative solutions that push the boundaries of unmanned aerial systems.
          </WhySponsorText>
          <WhySponsorText>
            Your support helps us participate in international competitions, conduct cutting-edge research, and build the next generation of aerospace engineers and computer scientists.
          </WhySponsorText>
        </WhySponsor>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Contact Us About Sponsorship</FormTitle>
          
          {submitStatus === 'success' && (
            <SuccessMessage>
              Thank you for your interest! We'll get back to you soon.
            </SuccessMessage>
          )}
          
          {submitStatus === 'error' && (
            <ErrorMessage>
              Something went wrong. Please try again or contact us directly.
            </ErrorMessage>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="company">Company</FormLabel>
            <FormInput 
              type="text" 
              id="company" 
              name="company" 
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></FormTextarea>
          </FormGroup>
          
          <SubmitButton 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </SupportSection>
    </SponsorsSection>
  );
};

export default Sponsors;