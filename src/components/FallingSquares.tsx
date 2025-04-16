import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  from {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 0.3;
  }
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0.3;
  }
`;

const SquaresContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const Square = styled.div<{ size: number; left: string; delay: number; duration: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: -${props => props.size}px;
  left: ${props => props.left};
  background-color: rgba(255, 255, 255, 0.3);
  animation: ${fall} ${props => props.duration}s linear ${props => props.delay}s infinite;
`;

export const FallingSquares: React.FC = () => {
  const [squares, setSquares] = useState<Array<{ id: number; size: number; left: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Increase number of squares and distribute them more evenly
    const columns = Array.from({ length: 10 }, (_, i) => i * (100 / 10));
    
    const initialSquares = columns.flatMap((column) => {
      // Create 4-5 squares per column for better coverage
      const squaresPerColumn = Math.floor(Math.random() * 2) + 4;
      return Array.from({ length: squaresPerColumn }, (_, index) => {
        const duration = Math.random() * 5 + 30; // 30-35 seconds for consistent speed
        const delay = -Math.random() * duration; // Negative delay for random cycle offset
        return {
          id: column * 10 + index,
          size: Math.random() * 8 + 12, // Slightly smaller: 12-20px
          left: `${column + (Math.random() * 8 - 4)}%`, // Stay within column bounds
          delay,
          duration
        };
      });
    });

    setSquares(initialSquares);
  }, []);

  return (
    <SquaresContainer>
      {squares.map(square => (
        <Square
          key={square.id}
          size={square.size}
          left={square.left}
          delay={square.delay}
          duration={square.duration}
        />
      ))}
    </SquaresContainer>
  );
}; 