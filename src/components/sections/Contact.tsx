import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatusType = 'success' | 'error' | null;

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 992px) {
    margin-bottom: 2rem;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #e21833;
  }
`;

const InfoText = styled.p`
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  margin-right: 1rem;
  width: 30px;
  color: #e21833;
  font-size: 1.2rem;
`;

const ContactDetail = styled.div`
  flex: 1;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f1f1f1;
  color: #666;
  font-size: 1.2rem;
  transition: all 0.3s;
  
  &:hover {
    background-color: #e21833;
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  flex: 1;
  background-color: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #e21833;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  
  &:focus {
    outline: none;
    border-color: #e21833;
    box-shadow: 0 0 0 3px rgba(226, 24, 51, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  transition: border-color 0.3s, box-shadow 0.3s;
  
  &:focus {
    outline: none;
    border-color: #e21833;
    box-shadow: 0 0 0 3px rgba(226, 24, 51, 0.1);
  }
`;

const SubmitButton = styled.button`
  background-color: #e21833;
  color: white;
  border: none;
  padding: 0.85rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #c21126;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Add the success and error message styled components
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
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
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection>
      <SectionTitle>Contact Us</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <InfoTitle>Get In Touch</InfoTitle>
          <InfoText>
            If you have any questions about our team, projects, or sponsorship opportunities, 
            please don't hesitate to reach out to us. We'd love to hear from you!
          </InfoText>
          
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-envelope"></i>
            </ContactIcon>
            <ContactDetail>
              <a href="mailto:umdmuas@gmail.com" style={{ color: '#444', textDecoration: 'none' }}>
                umdmuas@gmail.com
              </a>
            </ContactDetail>
          </ContactItem>
          
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-map-marker-alt"></i>
            </ContactIcon>
            <ContactDetail>
              A. James Clark School of Engineering,<br />
              University of Maryland,<br />
              College Park, MD 20742
            </ContactDetail>
          </ContactItem>
          
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/company/maryland-uas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/umdmuas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="mailto:umdmuas@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send us a Message</FormTitle>
          
          {submitStatus === 'success' && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
          
          {submitStatus === 'error' && (
            <ErrorMessage>
              Something went wrong. Please try again or contact us directly.
            </ErrorMessage>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="name">Full Name *</FormLabel>
            <FormInput 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email Address *</FormLabel>
            <FormInput 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject *</FormLabel>
            <FormInput 
              type="text" 
              id="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message *</FormLabel>
            <FormTextarea 
              id="message" 
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
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 