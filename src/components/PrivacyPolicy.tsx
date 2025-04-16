import React from 'react';
import styled from 'styled-components';
import { DentalTools } from './DentalTools';

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

const Title = styled.h1`
  position: absolute;
  top: 40px;
  color: white;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  width: 100%;
`;

const WhiteContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  height: 700px;
  background: white;
  border-radius: 20px;
  z-index: 1;
  display: grid;
  grid-template-columns: 310px 1fr;
  grid-template-rows: auto 1fr auto;
`;

const Header = styled.h2`
  grid-column: 1 / -1;
  position: absolute;
  top: 25px;
  width: 100%;
  color: #4169E1;
  font-size: 28px;
  text-align: center;
  margin: 0;
`;

const ContentSection = styled.div`
  position: absolute;
  top: 75px;
  left: 30px;
  width: 450px;
`;

const Greeting = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #000000;
`;

const Intro = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 1.4;
  overflow-wrap: break-word;
  color: #000000;
`;

const BulletList = styled.div`
  position: absolute;
  top: 170px;
  left: 30px;
  width: 310px;

  > div {
    font-size: 16px;
    margin-bottom: 15px;
    padding-left: 20px;
    position: relative;
    overflow-wrap: break-word;
    color: #000000;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #4169E1;
    }
  }
`;

const Example = styled.p`
  position: absolute;
  top: 545px;
  left: 30px;
  font-size: 16px;
  margin: 0;
  color: #000000;
`;

const ContinueButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 490px;
  height: 60px;
  background: #4169E1;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #3658c5;
  }
`;

const Character = styled.img`
  position: absolute;
  top: 170px;
  right: 30px;
  width: 200px;
  height: auto;
  z-index: 10;
`;

const Footer = styled.div`
  position: absolute;
  top: 840px; /* 120px (top of WhiteContainer) + 700px (height of WhiteContainer) + 20px spacing */
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 14px;
  width: 100%;
  text-align: center;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  overflow-y: auto;
`;

interface PrivacyPolicyProps {
  onContinue: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onContinue }) => {
  const handleContinueClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onContinue();
  };

  return (
    <Container>
      <DentalTools />
      <WhiteContainer>
        <Title>Privacy Policy</Title>
        <Content>
          <Header>Protecting Your Child's Privacy</Header>
          <ContentSection>
            <Greeting>Dear Parents and Guardians,</Greeting>
            <Intro>
              We take your child's privacy very seriously. To protect their identity 
              while allowing them to track their progress
            </Intro>
          </ContentSection>

          <BulletList>
            <div>We only use your child's first name and the first letter of their last name</div>
            <div>Birth date is used only to suggest an age-appropriate game level</div>
            <div>Personal information is stored locally on your device only</div>
            <div>We never share any personal information with third parties.</div>
            <div>If needed, we add a unique number to ensure each player name is unique.</div>
            <div>Parent/guardian email is optional and only used for reward notifications.</div>
          </BulletList>

          <Example>Example: "Michael S." or "Sarah J1234"</Example>

          <Character 
            src="https://i.imgur.com/Hrgo9w3.png" 
            alt="Friendly girl character with backpack"
          />

          <ContinueButton onClick={handleContinueClick}>
            I Understand, Continue
          </ContinueButton>
        </Content>
      </WhiteContainer>
      <Footer>
        <span>V1.0.0</span>
        <span>©2025 Mike Radel</span>
        <span>All Rights Reserved</span>
      </Footer>
    </Container>
  );
}; 