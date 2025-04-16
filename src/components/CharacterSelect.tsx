import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4169E1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 60px;
`;

const Subtitle = styled.h2`
  color: #90EE90;
  font-size: 28px;
  margin: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 120px;
`;

const Grid = styled.div`
  position: absolute;
  top: 180px;
  left: 100px;
  display: grid;
  grid-template-columns: 450px 450px;
  grid-template-rows: 200px 200px;
  gap: 20px;
  column-gap: 50px;
  row-gap: 20px;
`;

const Card = styled.button<{ isSelected: boolean }>`
  width: 450px;
  height: 200px;
  background-color: rgba(65, 105, 225, 0.5);
  border: ${props => props.isSelected ? '4px' : '3px'} solid #90EE90;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 15px rgba(144, 238, 144, 0.5);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(144, 238, 144, 0.8);
  }

  ${props => props.isSelected && `
    box-shadow: 0 0 20px rgba(144, 238, 144, 0.7);
    border-color: #90EE90;
  `}
`;

const CharacterImage = styled.img`
  height: 200px;
  width: auto;
  object-fit: contain;
  margin-left: 20px;
`;

const CardContent = styled.div`
  padding: 20px;
  color: white;
  text-align: left;
  flex: 1;
`;

const CharacterName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
  color: white;
`;

const CharacterSubtitle = styled.h4`
  font-size: 18px;
  margin: 0;
  margin-bottom: 15px;
  font-weight: normal;
  color: white;
`;

const AbilityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Ability = styled.li`
  color: #90EE90;
  font-size: 16px;
  margin-bottom: 5px;
`;

const ContinueButton = styled.button<{ disabled: boolean }>`
  position: absolute;
  top: 680px;
  width: 700px;
  height: 60px;
  background-color: ${props => props.disabled ? '#a8d3b6' : '#50C878'};
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 24px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s ease-in-out;
  opacity: ${props => props.disabled ? 0.7 : 1};

  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(144, 238, 144, 0.8);
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 40px;
  color: white;
  font-size: 14px;
  z-index: 1;

  > div:nth-child(1) {
    position: absolute;
    top: 765px;
  }

  > div:nth-child(2) {
    position: absolute;
    top: 785px;
  }

  > div:nth-child(3) {
    position: absolute;
    top: 805px;
  }
`;

interface Character {
  id: string;
  name: string;
  image: string;
  shield: string;
  abilities: string[];
}

const characters: Character[] = [
  {
    id: 'tooth-titan',
    name: 'Tooth Titan',
    image: 'https://i.imgur.com/mJntgzF.png',
    shield: 'Enamel Shield',
    abilities: ['Cavity Blast', 'Brush Beam']
  },
  {
    id: 'rinse-rescuer',
    name: 'Rinse Rescuer',
    image: 'https://i.imgur.com/oFt8Siz.png',
    shield: 'Splash Shield',
    abilities: ['Cavity Blast', 'Brush Beam']
  },
  {
    id: 'plaque-punisher',
    name: 'Plaque Punisher',
    image: 'https://i.imgur.com/HnUUtPZ.png',
    shield: 'Plaque Shield',
    abilities: ['Cavity Blast', 'Brush Beam']
  },
  {
    id: 'floss-fighter',
    name: 'Floss Fighter',
    image: 'https://i.imgur.com/sk98ADQ.png',
    shield: 'Floss Shield',
    abilities: ['Cavity Blast', 'Brush Beam']
  }
];

export const CharacterSelect: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const handleCharacterSelect = (characterId: string) => {
    setSelectedCharacter(characterId);
  };

  const handleContinue = () => {
    if (selectedCharacter) {
      // Store the selected character for game use
      localStorage.setItem('selectedCharacter', selectedCharacter);
      // Handle navigation to next screen
      console.log('Selected character:', selectedCharacter);
    }
  };

  return (
    <Container>
      <Title>Choose Your Hero</Title>
      <Subtitle>Select Your Dental Defender</Subtitle>
      
      <Grid>
        {characters.map((character) => (
          <Card
            key={character.id}
            isSelected={selectedCharacter === character.id}
            onClick={() => handleCharacterSelect(character.id)}
            aria-label={`Select ${character.name}`}
            aria-pressed={selectedCharacter === character.id}
            role="button"
            tabIndex={0}
          >
            <CharacterImage 
              src={character.image} 
              alt={`${character.name} - ${character.shield} specialist`}
            />
            <CardContent>
              <CharacterName>{character.name}</CharacterName>
              <CharacterSubtitle>The Tooth Guardian</CharacterSubtitle>
              <AbilityList>
                <Ability>✓ {character.shield}</Ability>
                {character.abilities.map((ability, index) => (
                  <Ability key={index}>✓ {ability}</Ability>
                ))}
              </AbilityList>
            </CardContent>
          </Card>
        ))}
      </Grid>

      <ContinueButton
        onClick={handleContinue}
        disabled={!selectedCharacter}
        aria-label="Continue with selected character"
      >
        <span>Continue</span>
        <span>→</span>
      </ContinueButton>

      <Footer>
        <div>V1.0.0</div>
        <div>©2025 Mike Radel</div>
        <div>All Rights Reserved</div>
      </Footer>
    </Container>
  );
};

export default CharacterSelect; 