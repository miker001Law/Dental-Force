import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const BG_COLOR = '#4169E1';
const ROYAL_BLUE = '#0000CD';

// Keyframe animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const idle = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-3px) rotate(1deg); }
  75% { transform: translateY(2px) rotate(-1deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

// Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${BG_COLOR};
  position: relative;
  overflow: hidden;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  color: white;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.2);
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

const HealthBar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100px;
  height: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${props => props.progress}%;
    height: 100%;
    background: #90EE90;
    transition: width 0.3s ease;
  }
`;

const PlayerMessage = styled.div`
  color: white;
  font-style: italic;
  font-size: 24px;
`;

const ScoreCounter = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 5px 15px;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TeethGround = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 104px;
  display: flex;
  justify-content: space-between;
`;

const TeethrowImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 104px;
  width: auto;
`;

const Character = styled.img`
  position: absolute;
  bottom: 110px;
  left: 50px;
  width: 80px;
  height: auto;
  animation: ${idle} 2s ease-in-out infinite;
`;

const Monster = styled.img<{ top: number; left: number }>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: 80px;
  height: auto;
  animation: ${float} 3s ease-in-out infinite;
  
  &:nth-child(2n) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(3n) {
    animation-delay: 1s;
  }
`;

const PowerBars = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PowerBar = styled.div`
  width: 10px;
  height: 100px;
  background: yellow;
  border-radius: 5px;
  cursor: pointer;
`;

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: ${ROYAL_BLUE};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 12px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

interface Monster {
  id: number;
  type: string;
  src: string;
  top: number;
  left: number;
}

export const GameScreen: React.FC = () => {
  const [health, setHealth] = useState(100);
  const [score, setScore] = useState(20);
  const [monsters, setMonsters] = useState<Monster[]>([
    { id: 1, type: 'food', src: 'https://i.imgur.com/IyNI9ef.png', top: 100, left: 100 },
    { id: 2, type: 'sugar', src: 'https://i.imgur.com/RgVqSTG.png', top: 200, left: 400 },
    { id: 3, type: 'plaque', src: 'https://i.imgur.com/vNptk1S.png', top: 100, left: 700 },
    { id: 4, type: 'cavity', src: 'https://i.imgur.com/JozuFWL.png', top: 400, left: 600 }
  ]);

  const handleMonsterClick = (id: number) => {
    setMonsters(prev => prev.filter(m => m.id !== id));
    setScore(prev => prev + 10);
  };

  return (
    <Container>
      <StatusBar>
        <span>2:06 PM Mon Apr 7</span>
        <span>WiFi 95% 📶</span>
      </StatusBar>
      
      <GameHeader>
        <HealthBar>
          <span>⬡</span>
          <ProgressBar progress={health} />
        </HealthBar>
        <PlayerMessage>Fantastic Flosser, Mike!</PlayerMessage>
        <ScoreCounter>
          <span>⭐</span>
          <span>{score}</span>
        </ScoreCounter>
      </GameHeader>

      {monsters.map(monster => (
        <Monster
          key={monster.id}
          src={monster.src}
          top={monster.top}
          left={monster.left}
          onClick={() => handleMonsterClick(monster.id)}
        />
      ))}

      <Character src="https://i.imgur.com/quyEnmm.png" />

      <TeethGround>
        <TeethrowImage src="https://i.imgur.com/q5wE24U.png" />
      </TeethGround>

      <PowerBars>
        <PowerBar />
        <PowerBar />
      </PowerBars>

      <NavBar>
        <NavButton>🏠<span>HOME</span></NavButton>
        <NavButton>♜<span>GAME</span></NavButton>
        <NavButton>🛒<span>SHOP</span></NavButton>
        <NavButton>🏆<span>LEADERBOARD</span></NavButton>
        <NavButton>⚙️<span>SETTINGS</span></NavButton>
      </NavBar>
    </Container>
  );
}; 