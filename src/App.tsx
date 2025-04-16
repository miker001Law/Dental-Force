import React, { useState } from 'react';
import styled from 'styled-components';
import { CenterLogo } from './components/CenterLogo';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { FallingSquares } from './components/FallingSquares';
import { AnimatedKnights } from './components/AnimatedKnights';
import { PlayerRegistration } from './components/PlayerRegistration';
import { ChooseHero } from './components/ChooseHero';
import { ChooseWeapon } from './components/ChooseWeapon';
// import { ChooseHero } from './components/ChooseHero';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #4169E1;
  position: relative;
  overflow: hidden;
`;

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'privacy' | 'registration' | 'chooseHero' | 'chooseWeapon'>('home');

  const handleStartClick = () => {
    setCurrentScreen('privacy');
  };

  const handlePrivacyContinue = () => {
    setCurrentScreen('registration');
  };

  const handleRegistrationComplete = () => {
    setCurrentScreen('chooseHero');
  };

  return (
    <AppContainer>
      {currentScreen === 'home' && (
        <>
          <FallingSquares />
          <AnimatedKnights />
          <CenterLogo onStartClick={handleStartClick} />
        </>
      )}
      {currentScreen === 'privacy' && (
        <PrivacyPolicy onContinue={handlePrivacyContinue} />
      )}
      {currentScreen === 'registration' && (
        <PlayerRegistration onComplete={handleRegistrationComplete} />
      )}
      {currentScreen === 'chooseHero' && (
        <ChooseHero onContinue={() => setCurrentScreen('chooseWeapon')} />
      )}
      {currentScreen === 'chooseWeapon' && (
        <ChooseWeapon />
      )}
    </AppContainer>
  );
};

export default App; 