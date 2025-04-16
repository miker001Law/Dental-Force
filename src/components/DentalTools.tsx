import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  0% { filter: grayscale(0); }
  100% { filter: grayscale(1); }
`;

const FLOSS_PICK_IMAGE = "https://i.imgur.com/1N1CI7N.png";

const ToolsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const Tool = styled.img<{
  size: number;
  left: number;
  delay: number;
  duration: number;
}>`
  position: absolute;
  top: 0;
  left: ${props => props.left}%;
  width: ${props => props.size}px;
  height: auto;
  opacity: 0.3;
  pointer-events: none;
  animation: fall ${props => props.duration}s linear ${props => props.delay}s infinite;
  z-index: 0;
`;

export const DentalTools: React.FC = () => {
  const columns = Array.from({ length: 12 }, (_, i) => i * (100 / 12));
  
  const tools = useMemo(() => (
    columns.flatMap((column) => {
      const toolsPerColumn = Math.floor(Math.random() * 2) + 3;
      return Array.from({ length: toolsPerColumn }, () => {
        const size = Math.random() * 60 + 100;
        const duration = Math.random() * 20 + 50;
        const delay = -Math.random() * duration;
        return {
          left: column + (Math.random() * 6 - 3),
          size,
          delay,
          duration
        };
      });
    })
  ), []); // Only generate once

  return (
    <ToolsContainer>
      {tools.map((tool, i) => (
        <Tool
          key={i}
          src={FLOSS_PICK_IMAGE}
          size={tool.size}
          left={tool.left}
          delay={tool.delay}
          duration={tool.duration}
        />
      ))}
    </ToolsContainer>
  );
}; 