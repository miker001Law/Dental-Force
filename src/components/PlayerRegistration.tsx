import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #4169E1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const RegistrationContainer = styled.div`
  position: relative;
  width: 580px;
  height: 680px;
  background: #F0F0F0;
  border-radius: 20px;
  margin-top: 70px;
  overflow: visible;
  z-index: 1;
`;

const Title = styled.h1`
  position: absolute;
  top: 25px;
  width: 100%;
  color: #4169E1;
  font-size: 32px;
  text-align: center;
  margin: 0;
`;

const Form = styled.form`
  position: relative;
  z-index: 10;
  padding: 80px 30px 30px 100px;
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 20px;
    margin-right: 80px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 0 15px;
  font-size: 16px;
  position: relative;
  z-index: 10;

  &:focus {
    outline: none;
    border-color: #4169E1;
    box-shadow: 0 0 0 2px rgba(65, 105, 225, 0.2);
  }
`;

const SmallText = styled.div`
  font-size: 12px;
  color: #666666;
  margin-top: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 10;
`;

const PolicyLink = styled.a`
  color: #4169E1;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const RegisterButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 50px;
  background: ${props => props.disabled ? '#cccccc' : '#4CAF50'};
  color: ${props => props.disabled ? '#666666' : 'white'};
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-top: 40px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: ${props => props.disabled ? 0.7 : 1};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => props.disabled ? '#cccccc' : '#45a049'};
  }
`;

const GuestButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 50px;
  background: white;
  color: ${props => props.disabled ? '#666666' : 'black'};
  border: 2px solid ${props => props.disabled ? '#cccccc' : 'black'};
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-top: 20px;
  position: relative;
  z-index: 10;
  opacity: ${props => props.disabled ? 0.7 : 1};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => props.disabled ? 'white' : '#f5f5f5'};
  }
`;

const CharacterLeft = styled.img`
  position: absolute;
  left: -120px;
  top: 10px;
  width: 242px;
  height: auto;
  z-index: 5;
  pointer-events: none;
`;

const CharacterRight = styled.img`
  position: absolute;
  right: -100px;
  bottom: 10px;
  width: 220px;
  height: auto;
  z-index: 5;
  pointer-events: none;
`;

const Footer = styled.div`
  position: absolute;
  left: 40px;
  bottom: 40px;
  color: white;
  font-size: 14px;
  z-index: 1;
  text-align: left;

  > div {
    margin-bottom: 1px;
  }

  > div:first-child {
    margin-left: 45px;
    margin-bottom: 2px;
  }
`;

const TOOTHBRUSH_IMAGE = "https://i.imgur.com/HnUUtPZ.png";

const ToothbrushBackground = () => {
  const brushes = Array.from({ length: 10 }).map((_, i) => {
    const top = Math.random() * 80; // percent
    const left = Math.random() * 80; // percent
    const size = Math.random() * 60 + 80; // 80-140px
    const rotate = Math.random() * 360;
    return (
      <img
        key={i}
        src={TOOTHBRUSH_IMAGE}
        alt="toothbrush"
        style={{
          position: 'absolute',
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          opacity: 0.12,
          transform: `rotate(${rotate}deg)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    );
  });
  return <>{brushes}</>;
};

interface PlayerRegistrationProps {
  onComplete: () => void;
}

export const PlayerRegistration: React.FC<PlayerRegistrationProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    acceptedPolicy: false
  });

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.age.trim() !== '' &&
      formData.acceptedPolicy
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    e.stopPropagation();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFormValid()) {
      onComplete();
    }
  };

  const handleGuestContinue = () => {
    if (formData.acceptedPolicy) {
      onComplete();
    }
  };

  return (
    <Container>
      <ToothbrushBackground />
      <RegistrationContainer>
        <Title>Player Registration</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="age">Child's Age</Label>
            <Input
              id="age"
              name="age"
              type="text"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
            />
            <SmallText>Used to recommend appropriate game level</SmallText>
          </div>

          <div>
            <Label htmlFor="email">Parent/Guardian Email (Optional)</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Parent/Guardian Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="phone">Parent/Guardian Phone (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <SmallText>For prize notification only</SmallText>
          </div>

          <CheckboxContainer>
            <Checkbox
              id="acceptedPolicy"
              name="acceptedPolicy"
              type="checkbox"
              checked={formData.acceptedPolicy}
              onChange={handleInputChange}
            />
            <Label htmlFor="acceptedPolicy" style={{ margin: 0 }}>
              I have read and accept the <PolicyLink href="#">Privacy Policy</PolicyLink>
            </Label>
          </CheckboxContainer>

          <RegisterButton 
            type="submit" 
            disabled={!isFormValid()}
          >
            <span>✓</span>
            <span>Register Player</span>
          </RegisterButton>

          <GuestButton 
            type="button"
            disabled={!formData.acceptedPolicy}
            onClick={handleGuestContinue}
          >
            Continue as Guest
          </GuestButton>
        </Form>

        <CharacterLeft
          src="https://i.imgur.com/mJntgzF.png"
          alt="Girl character"
        />
        <CharacterRight
          src="https://i.imgur.com/oFt8Siz.png"
          alt="Boy character"
        />
      </RegistrationContainer>

      <Footer>
        <div>V1.0.0</div>
        <div>©2025 Mike Radel</div>
        <div>All Rights Reserved</div>
      </Footer>
    </Container>
  );
}; 