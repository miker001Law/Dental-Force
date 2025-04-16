import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const KnightContainer = styled.div<{ side: 'left' | 'right' }>`
  position: absolute;
  ${props => props.side === 'left' ? 'left: 25%' : 'right: 25%'};
  transform: ${props => props.side === 'left' ? 'translateX(-25px) translateY(-50%)' : 'translateX(25px) translateY(-50%)'};
  top: 450px;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const KnightImage = styled.img<{ isVisible: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  animation: ${props => (props.isVisible ? fadeIn : fadeOut)} 1s ease-in-out;
  transition: opacity 1s ease-in-out;
`;

export const AnimatedKnights: React.FC = () => {
  const [leftKnightIndex, setLeftKnightIndex] = useState(0);
  const [rightKnightIndex, setRightKnightIndex] = useState(0);
  const [isLeftSide, setIsLeftSide] = useState(true);

  const leftKnights = [
    'https://i.imgur.com/OLd2z9e.png',  // female knight pose 1
    'https://i.imgur.com/ZhjwYcE.png'   // female knight pose 2
  ];

  const rightKnights = [
    'https://i.imgur.com/xZ7NqRH.png',  // male knight pose 1
    'https://i.imgur.com/quyEnmm.png'   // male knight pose 2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLeftSide) {
        setLeftKnightIndex(prev => (prev + 1) % leftKnights.length);
      } else {
        setRightKnightIndex(prev => (prev + 1) % rightKnights.length);
      }
      setIsLeftSide(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isLeftSide]);

  return (
    <>
      <KnightContainer side="left">
        {leftKnights.map((src, index) => (
          <KnightImage
            key={src}
            src={src}
            isVisible={index === leftKnightIndex}
            alt={`Left Knight ${index + 1}`}
          />
        ))}
      </KnightContainer>
      <KnightContainer side="right">
        {rightKnights.map((src, index) => (
          <KnightImage
            key={src}
            src={src}
            isVisible={index === rightKnightIndex}
            alt={`Right Knight ${index + 1}`}
          />
        ))}
      </KnightContainer>
    </>
  );
}; 