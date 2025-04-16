import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const BG_COLOR = '#4169E1';
const GREEN = '#90EE90';
const BUTTON_GREEN = '#50C878';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${BG_COLOR};
  position: relative;
  overflow: hidden;
`;

const Header = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 60px;
  width: 100%;
  margin: 0;
`;

const SubHeader = styled.h2`
  color: ${GREEN};
  font-size: 28px;
  text-align: center;
  position: absolute;
  top: 120px;
  width: 100%;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px 50px;
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 440px;
`;

const Card = styled.button<{ selected: boolean }>`
  width: 450px;
  height: 200px;
  background: rgba(65, 105, 225, 0.5);
  border: 3px solid ${GREEN};
  border-radius: 15px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s, border 0.2s;
  box-shadow: ${({ selected }) => selected ? '0 0 16px 4px #50C878' : 'none'};
  border-width: ${({ selected }) => selected ? '5px' : '3px'};
  z-index: 1;
  &:hover, &:focus {
    box-shadow: 0 0 16px 4px #90EE90;
    border-width: 5px;
  }
`;

const CharacterImg = styled.img`
  height: 200px;
  width: auto;
  margin-left: -30px;
  margin-right: 20px;
  flex-shrink: 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

const CharName = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const CharSubtitle = styled.div`
  color: white;
  font-size: 18px;
  margin-bottom: 8px;
`;

const AbilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Ability = styled.li`
  color: #90EE90;
  font-size: 18px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  &::before {
    content: '🛡️';
    margin-right: 8px;
    font-size: 18px;
  }
`;

const ContinueButton = styled.button<{ enabled: boolean }>`
  position: absolute;
  left: 50%;
  top: 680px;
  transform: translateX(-50%);
  width: 700px;
  height: 60px;
  background: ${BUTTON_GREEN};
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  cursor: ${({ enabled }) => enabled ? 'pointer' : 'not-allowed'};
  opacity: ${({ enabled }) => enabled ? 1 : 0.6};
  transition: filter 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  &:hover {
    filter: brightness(1.1);
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 35px;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
`;

const characters = [
  {
    key: 'tooth-titan',
    name: 'Tooth Titan',
    subtitle: 'The Tooth Guardian',
    abilities: ['Enamel Shield', 'Cavity Blast', 'Brush Beam'],
    img: 'https://i.imgur.com/quyEnmm.png',
    alt: 'Tooth Titan - Female character with floss weapon',
  },
  {
    key: 'rinse-rescuer',
    name: 'Rinse Rescuer',
    subtitle: 'The Tooth Guardian',
    abilities: ['Splash Shield', 'Cavity Blast', 'Brush Beam'],
    img: 'https://i.imgur.com/xZ7NqRH.png',
    alt: 'Rinse Rescuer - Male character with blue armor and water effects',
  },
  {
    key: 'plaque-punisher',
    name: 'Plaque Punisher',
    subtitle: 'The Tooth Guardian',
    abilities: ['Plaque Shield', 'Cavity Blast', 'Brush Beam'],
    img: 'https://i.imgur.com/OLd2z9e.png',
    alt: 'Plaque Punisher - Male character with green cape',
  },
  {
    key: 'floss-fighter',
    name: 'Floss Fighter',
    subtitle: 'The Tooth Guardian',
    abilities: ['Floss Shield', 'Cavity Blast', 'Brush Beam'],
    img: 'https://i.imgur.com/ZhjwYcE.png',
    alt: 'Floss Fighter - Female character with pink/purple armor and cape',
  },
];

export const ChooseHero: React.FC<{ onContinue?: (selected: string) => void }> = ({ onContinue }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelected(key);
  };

  const handleContinue = () => {
    if (selected && onContinue) {
      onContinue(selected);
    }
  };

  return (
    <Container>
      <Header>Choose Your Hero</Header>
      <SubHeader>Select Your Dental Defender</SubHeader>
      <Grid>
        {characters.map((char, idx) => (
          <Card
            key={char.key}
            selected={selected === char.key}
            aria-label={`Select ${char.name}`}
            aria-pressed={selected === char.key}
            tabIndex={0}
            onClick={() => handleSelect(char.key)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') handleSelect(char.key);
            }}
          >
            <CharacterImg src={char.img} alt={char.alt} />
            <CardContent>
              <CharName>{char.name}</CharName>
              <CharSubtitle>{char.subtitle}</CharSubtitle>
              <AbilityList>
                {char.abilities.map((ab, i) => (
                  <Ability key={i}>{ab}</Ability>
                ))}
              </AbilityList>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <ContinueButton
        enabled={!!selected}
        onClick={handleContinue}
        tabIndex={0}
        aria-disabled={!selected}
        aria-label="Continue to next step"
        disabled={!selected}
      >
        Continue <span aria-hidden>→</span>
      </ContinueButton>
      <Footer>
        <div>V1.0.0</div>
        <div>©2025 Mike Radel</div>
        <div>All Rights Reserved</div>
      </Footer>
    </Container>
  );
}; 