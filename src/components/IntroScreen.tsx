import { useEffect, useState, useRef } from 'react';

const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  // phase 0: 준비, 1: 등장(두둥!), 2: 퇴장(사라짐)
  const [phase, setPhase] = useState(0); 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. 넷플릭스 스타일 폰트 불러오기
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // 2. 사운드 준비
    const audio = new Audio('/intro.mp3');
    audio.volume = 0.5;
    audioRef.current = audio;

    // --- 타이밍 스케줄 ---
    
    // [0.1초 뒤] 등장 & 소리 재생
    setTimeout(() => {
      setPhase(1); // 글자 등장
      audio.play().catch(() => console.log("자동재생 차단됨")); // 소리 재생
    }, 100);

    // [2.5초 뒤] 퇴장 애니메이션 시작 (커지면서 사라짐)
    setTimeout(() => {
      setPhase(2); 
    }, 2500);

    // [3.5초 뒤] 인트로 완전 종료 -> 메인 화면으로
    const endTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(endTimer);
  }, [onComplete]);

  // 단계별 애니메이션 스타일 설정
  const getAnimationClass = () => {
    if (phase === 0) return 'opacity-0 scale-90'; // 준비: 투명하고 약간 작게
    if (phase === 1) return 'opacity-100 scale-100'; // 등장: 선명하고 원래 크기
    if (phase === 2) return 'opacity-0 scale-150'; // 퇴장: 투명해지면서 엄청 커짐
    return '';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      <h1 
        className={`text-7xl md:text-9xl text-red-600 tracking-widest transition-all duration-[1000ms] ease-in-out ${getAnimationClass()}`}
        style={{ 
          fontFamily: "'Bebas Neue', impact, sans-serif", // 넷플릭스 폰트
          textShadow: "0 0 20px rgba(220, 38, 38, 0.7)" // 붉은 네온 효과
        }}
      >
        SEXFLIX
      </h1>
    </div>
  );
};

export default IntroScreen;