import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
  position: absolute;
  top: 60px;
  width: 100%;
  color: white;
  font-size: 32px;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled.h1`
  position: absolute;
  top: 120px;
  width: 100%;
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const Tagline = styled.h2`
  position: absolute;
  top: 180px;
  width: 100%;
  color: #90EE90;
  font-size: 28px;
  text-align: center;
  margin: 0;
  font-family: 'Comic Sans MS', cursive;
`;

const StartButton = styled.button`
  position: absolute;
  top: 700px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 50px;
  background: #FFD700;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Version = styled.div`
  position: absolute;
  top: 820px;
  width: 100%;
  color: white;
  font-size: 14px;
  text-align: center;
`;

const Copyright = styled.div`
  position: absolute;
  top: 840px;
  width: 100%;
  color: white;
  font-size: 14px;
  text-align: center;
`;

const Rights = styled.div`
  position: absolute;
  top: 860px;
  width: 100%;
  color: white;
  font-size: 14px;
  text-align: center;
`;

const NavigationBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 3;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  width: 80px;
`;

const DiamondContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 300px;
  height: 300px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  z-index: 0;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
`;

interface CenterLogoProps {
  onStartClick: () => void;
}

export const CenterLogo: React.FC<CenterLogoProps> = ({ onStartClick }) => {
  return (
    <>
      <MainTitle>Dr. Peter Nelson</MainTitle>
      <SubTitle>DENTAL DEFENDERS</SubTitle>
      <Tagline>Save Teeth, Fight Decay</Tagline>
      <DiamondContainer />
      <LogoContainer>
        <LogoImage src="https://i.imgur.com/P4Q75j7.png" alt="Dental Defenders Logo" />
      </LogoContainer>
      <StartButton onClick={onStartClick}>
        <span>▶</span>
        <span>Let's Begin</span>
      </StartButton>
      <Version>V1.0.0</Version>
      <Copyright>©2025 Mike Radel</Copyright>
      <Rights>All Rights Reserved</Rights>
      <NavigationBar>
        <NavButton>🏠<span>HOME</span></NavButton>
        <NavButton>♟️<span>GAME</span></NavButton>
        <NavButton>🛒<span>SHOP</span></NavButton>
        <NavButton>🏆<span>LEADERBOARD</span></NavButton>
        <NavButton>⚙️<span>SETTINGS</span></NavButton>
      </NavigationBar>
    </>
  );
}; 