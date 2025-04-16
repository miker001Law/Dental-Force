import React, { useState } from 'react';
import styled from 'styled-components';
import { GameScreen } from './GameScreen';

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

const Card = styled.button<{ selected: boolean; marginTop?: number }>`
  width: 450px;
  height: 200px;
  background: rgba(65, 105, 225, 0.5);
  border: 3px solid ${GREEN};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s, border 0.2s;
  box-shadow: ${({ selected }) => selected ? '0 0 15px rgba(144, 238, 144, 0.8)' : '0 0 10px rgba(255,255,255,0.5)'};
  border-width: ${({ selected }) => selected ? '5px' : '3px'};
  z-index: 1;
  overflow: visible;
  margin-top: ${({ marginTop }) => marginTop ? `${marginTop}px` : '0'};
  &:hover, &:focus {
    box-shadow: 0 0 15px rgba(144, 238, 144, 0.8);
    border-width: 5px;
  }
`;

const ProductImg = styled.img<{ rotate?: number; style?: React.CSSProperties }>`
  object-fit: contain;
  object-position: left center;
  margin-left: 15px;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
  ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`}
`;

const CardContent = styled.div<{ cardIndex: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  ${({ cardIndex }) => {
    switch (cardIndex) {
      case 0: // Enamel Enforcer
        return `
          left: 198px;
          top: 0;
        `;
      case 1: // Germ Gladiator
        return `
          right: 194px;
          top: 0;
        `;
      case 2: // Brush Battler
        return `
          right: 199px;
          top: 0;
        `;
      case 3: // Floss Fencer
        return `
          left: 196px;
          top: 0;
        `;
      default:
        return '';
    }
  }}
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
  top: 705px;
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
  bottom: 30px;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
`;

const WeaponImg = styled.img<{ top: number; left: number; rotate?: number; height?: number }>`
  position: absolute;
  z-index: 2;
  pointer-events: none;
  height: ${props => props.height || 225}px !important;
  width: auto;
  max-height: ${props => props.height || 225}px;
  min-height: ${props => props.height || 225}px;
  ${({ top, left, rotate }) => `
    top: ${top}px;
    left: ${left}px;
    ${rotate ? `transform: rotate(${rotate}deg);` : ''}
  `}
`;

const products = [
  {
    key: 'toothpaste',
    name: 'Enamel Enforcer',
    subtitle: 'The Tooth Guardian',
    abilities: ['Enamel Shield', 'Cavity Blast', 'Brush Beam'],
    img: 'https://i.imgur.com/zuhdwYv.png',
    alt: 'Toothpaste tube - Crest',
  },
  {
    key: 'mouthwash',
    name: 'Germ Gladiator',
    subtitle: 'The Tooth Guardian',
    abilities: ['Splash Shield', 'Cavity Blast', 'Brush Beam'],
    img: 'https://i.imgur.com/dQRIkqP.png',
    alt: 'Mouthwash bottle - Crest',
  },
  {
    key: 'toothbrush',
    name: 'Brush Battler',
    subtitle: 'The Tooth Guardian',
    abilities: ['Plaque Shield', 'Cavity Blast', 'Brush Beam'],
    img: 'https://i.imgur.com/4NBKrU8.png',
    alt: 'Electric toothbrush - Oral-B',
  },
  {
    key: 'floss',
    name: 'Floss Fencer',
    subtitle: 'The Tooth Guardian',
    abilities: ['Floss Shield', 'Cavity Blast', 'Brush Beam'],
    img: 'https://i.imgur.com/Q56VTUl.png',
    alt: 'Dental floss pick - green',
  },
];

interface ChooseWeaponProps {
  onContinue?: (selected: string) => void;
  playerName: string;
}

export const ChooseWeapon: React.FC<ChooseWeaponProps> = ({ onContinue, playerName }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showGame, setShowGame] = useState(false);

  const handleSelect = (key: string) => {
    setSelected(key);
  };

  const handleContinue = () => {
    if (selected) {
      setShowGame(true);
    }
  };

  if (showGame && selected) {
    return <GameScreen playerName={playerName} selectedWeapon={selected} />;
  }

  return (
    <Container>
      <Header>Choose Your Dental Weapon</Header>
      <SubHeader>Select Your Dental Defender</SubHeader>
      <Grid>
        {products.map((prod, idx) => {
          let rotate = undefined;
          let height = undefined;
          // Card grid positions
          let cardRow = idx < 2 ? 1 : 2;
          let cardCol = idx % 2 === 0 ? 1 : 2;
          // Weapon image positions (customize as needed)
          let imgTop = cardRow === 1 ? 0 : 220; // Base position
          let imgLeft = cardCol === 1 ? 0 : 520; // 520px to the right for right col
          let cardMarginTop = undefined;
          if (idx === 0) { imgTop = -50; imgLeft = 59; height = 240; } // Toothpaste
          if (idx === 1) { imgTop = -57; imgLeft = 818; height = 262; } // Mouthwash: height +22px, top -22px to maintain base
          if (idx === 2) { imgTop = 210; imgLeft = 615; height = 255; cardMarginTop = 36; } // Toothbrush: lowered by 20px
          if (idx === 3) { rotate = 180; imgTop = 227; imgLeft = 263; height = 233; cardMarginTop = 36; } // Floss pick: lowered by 15px
          // Render weapon image absolutely in grid
          return (
            <React.Fragment key={prod.key}>
              <WeaponImg
                src={prod.img}
                alt={prod.alt}
                top={imgTop}
                left={imgLeft}
                rotate={rotate}
                height={height}
              />
              <Card
                selected={selected === prod.key}
                marginTop={cardMarginTop}
                aria-label={`Select ${prod.name}`}
                aria-pressed={selected === prod.key}
                tabIndex={0}
                onClick={() => handleSelect(prod.key)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') handleSelect(prod.key);
                }}
                style={{ gridRow: cardRow, gridColumn: cardCol }}
              >
                <CardContent className="product-info" cardIndex={idx}>
                  <CharName>{prod.name}</CharName>
                  <CharSubtitle>{prod.subtitle}</CharSubtitle>
                  <AbilityList>
                    {prod.abilities.map((ab, i) => (
                      <Ability key={i}>{ab}</Ability>
                    ))}
                  </AbilityList>
                </CardContent>
              </Card>
            </React.Fragment>
          );
        })}
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