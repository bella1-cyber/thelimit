const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* 배경 이미지 (경로 앞에 점 찍는 거 잊지 마세요!) */}
      <div className="absolute inset-0">
        <img 
          src="./images/main-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60" 
        />
        {/* 배경을 살짝 어둡게 눌러주는 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        {/* 상단 뱃지: 이건 포인트로 빨간색 유지 (경고 느낌) */}
        <div className="mb-8 animate-fade-in-up">
          <span className="text-red-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase bg-red-950/30 px-6 py-2 rounded-full border border-red-900/50 backdrop-blur-sm">
            19+ Adult Survival Reality
          </span>
        </div>

        {/* 
            [수정됨] 타이틀: 메탈 실버 그라데이션 
            - from-white via-gray-200 to-gray-500
            - drop-shadow로 입체감 추가
        */}
        <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter">
          <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl filter">
            THE LIMIT
          </span>
        </h1>

        {/* [수정됨] 서브 타이틀: 다시 영어로 변경 (Edging Game) */}
        <p className="text-2xl md:text-4xl font-light text-gray-300 mb-8 tracking-[0.3em] uppercase opacity-90">
          Edging Game
        </p>

        {/* 장식용 선 */}
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-8 opacity-50"></div>

        {/* 설명 문구: 흰색으로 깔끔하게 변경 */}
        <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
          단 14일, 7인의 가장 뜨겁고 적나라한 리얼리티 스토리<br />
          <span className="text-white font-medium drop-shadow-md">
            모든 것이 허용되지만, 단 한 가지는 금지된다.
          </span>
        </p>

        {/* 하단 정보 박스들 */}
        <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-8 py-5 min-w-[200px] hover:bg-white/5 transition-colors">
            <div className="text-4xl md:text-5xl font-bold text-white">$100K</div>
            <div className="text-xs text-gray-400 mt-2 tracking-widest uppercase">Prize Money</div>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-8 py-5 min-w-[200px] hover:bg-white/5 transition-colors">
            <div className="text-4xl md:text-5xl font-bold text-white">14</div>
            <div className="text-xs text-gray-400 mt-2 tracking-widest uppercase">Days</div>
          </div>

          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-8 py-5 min-w-[200px] hover:bg-white/5 transition-colors">
            <div className="text-4xl md:text-5xl font-bold text-red-500">WINNER</div>
            <div className="text-xs text-gray-400 mt-2 tracking-widest uppercase">Takes All</div>
          </div>
        </div>
      </div>

      {/* 바닥 그라데이션 (자연스럽게 이어지도록) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroSection;