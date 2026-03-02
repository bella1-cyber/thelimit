import { useEffect } from 'react';

const LoadingScreen = () => {
  useEffect(() => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

    const playNetflixSound = () => {
      const now = audioContext.currentTime;

      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator1.frequency.setValueAtTime(196, now);
      oscillator2.frequency.setValueAtTime(220, now);

      gainNode.gain.setValueAtTime(0.3, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 2);

      oscillator1.start(now);
      oscillator2.start(now);
      oscillator1.stop(now + 2);
      oscillator2.stop(now + 2);
    };

    playNetflixSound();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="animate-fade-in-out">
        <h1 className="text-8xl font-bold tracking-wider" style={{
          fontFamily: 'Impact, fantasy',
          color: '#DC143C',
          textShadow: '0 0 30px rgba(220, 20, 60, 0.8), 0 0 60px rgba(220, 20, 60, 0.5)',
          letterSpacing: '0.3em'
        }}>
          SEXFLIX
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
