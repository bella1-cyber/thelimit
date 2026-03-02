import { useState } from 'react';
import Navbar from './components/Navbar';
import IntroScreen from './components/IntroScreen';
import HeroSection from './components/HeroSection';
import IslandSection from './components/IslandSection';
import ResortSection from './components/ResortSection';
import RulesSection from './components/RulesSection';
import RoutineSection from './components/RoutineSection';
import ContestantsSection from './components/ContestantsSection';
import EventCalendar from './components/EventCalendar';
import BackgroundMusic from './components/BackgroundMusic'; // 👈 1. 이거 추가!

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && <IntroScreen onComplete={() => setIntroFinished(true)} />}

      <div className={`transition-opacity duration-1000 ${introFinished ? 'opacity-100' : 'opacity-0'}`}>
        {introFinished && (
          <>
            <Navbar />
            <BackgroundMusic /> {/* 👈 2. 여기에 추가하세요! (인트로 끝나면 음악 시작) */}
            
            <div id="hero"><HeroSection /></div>
            <div id="island"><IslandSection /></div>
            <div id="resort"><ResortSection /></div>
            <div id="rules"><RulesSection /></div>
            <div id="routine"><RoutineSection /></div>
            <div id="calendar"><EventCalendar /></div>
            <div id="contestants"><ContestantsSection /></div>
          </>
        )}
      </div>
    </>
  );
}

export default App;