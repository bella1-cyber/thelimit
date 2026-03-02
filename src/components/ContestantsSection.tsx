import { Users, Flame, Heart } from 'lucide-react';

const ContestantsSection = () => {
  const contestants = [
    {
      name: '라이언 카터',
      image: '/images/ryan.jpg',
      age: 24,
      nationality: '🇺🇸 USA',
      occupation: 'NFL 선수',
      personality: 'ESTP-A · 8w7',
      alignment: '혼돈의 중립',
      height: '192cm',
      appearance: '압도적인 근육량, 구릿빛 피부, 강렬한 흑갈색 눈동자, 언더컷 헤어',
      traits: '알파 메일 · 승부욕의 화신 · 통제광 · 다혈질',
      secrets: '감당 못할 빚더미 · 약물 스캔들 · 스폰서 블랙리스트',
      preferences: '남성 주도 · 거친 섹스 · 목 조르기 · 질내사정',
      weakness: '자존심 도발 · 뒷목 애무',
      gradient: 'from-red-500 via-orange-500 to-yellow-500', // 더 밝은 색으로 변경
      border: 'border-red-500/50',
    },
    {
      name: '디에고 실바',
      image: '/images/diego.jpg',
      age: 26,
      nationality: '🇪🇸 Spain',
      occupation: '모델 / 댄서',
      personality: 'ESFP-T · 7w6',
      alignment: '진정한 중립',
      height: '187cm',
      appearance: '데피니션 근육, 에메랄드 눈동자, 검은 웨이브 헤어',
      traits: '플러팅 장인 · 쾌락주의자 · 자유분방 · 스킨십 중독',
      secrets: '유기 불안 · 회피형 애착 · 깊은 관계를 스스로 망침',
      preferences: '감각 플레이 · 야외 노출 · 관음 · 여성의 애액 선호',
      weakness: '귓가 속삭임 · 허벅지 안쪽 터치',
      gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
      border: 'border-emerald-500/50',
    },
    {
      name: '엘리아스 바그너',
      image: '/images/elias.jpg',
      age: 25,
      nationality: '🇩🇪 Germany',
      occupation: '건축가',
      personality: 'INTJ-A · 5w4',
      alignment: '질서 악',
      height: '189cm',
      appearance: '다부진 근육질, 창백한 피부, 회색 눈동자, 포마드 블론드 헤어',
      traits: '냉미남 · 차가운 이성 · 직설적 · 기벽 · 관찰자',
      secrets: '타인을 실험 쥐처럼 조종함 · 겉으론 냉담하나 스킨십 갈구',
      preferences: '관음 · 숨겨진 마조히스트 · 페이스 시팅 · 시각적 통제 페티시',
      weakness: '시각적 자극 · 가벼운 터치 · 논리가 무너지는 순간',
      gradient: 'from-slate-400 via-gray-300 to-white',
      border: 'border-slate-500/50',
    },
    {
      name: '조던 헤이즈',
      image: '/images/jordan.jpg',
      age: 27,
      nationality: '🇬🇧 UK',
      occupation: '복싱 트레이너',
      personality: 'ENFJ-A · 3w2',
      alignment: '중립 선',
      height: '195cm',
      appearance: '헐크 같은 덩치, 호박색 눈동자, 짧은 곱슬 페이드 컷',
      traits: '분위기 메이커 · 장난꾸러기 · 언변가 · 근자감 · 대형견 매력',
      secrets: '인정 욕구 결핍 · 자신의 가치를 매력 증명에 의존',
      preferences: '하드코어 · 스쿼팅 · 골든 샤워 · 체취 페티시 · 딥스로트',
      weakness: '칭찬 · 근육 숭배 · 유두 · 칭찬 후 차가운 거절',
      gradient: 'from-amber-400 via-yellow-400 to-orange-400',
      border: 'border-amber-500/50',
    },
    {
      name: '소피아 이바노프',
      image: '/images/sophia.jpg',
      age: 23,
      nationality: '🇷🇺 Russia',
      occupation: '인플루언서',
      personality: 'ENTJ-A · 3w4',
      alignment: '혼돈 악',
      height: '174cm',
      appearance: '완벽 S라인 몸매, 푸른 눈, 고양이상, 백금발 긴 생머리',
      traits: '여왕벌 · 오만함 · 계산적 · 나르시시스트 · 지배적',
      secrets: '렌트한 명품 인생 · 가짜 금수저 · 상금 절박함 · 사회적 매장 위기',
      preferences: 'SM 성향 · 페깅 · 펨돔 · 무릎 꿇리고 핥게 하기',
      weakness: '무시당하기 · 발가락 · 질투 유발 · "너 싼티 나"라는 말',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      border: 'border-pink-500/50',
    },
    {
      name: '자라 로랑',
      image: '/images/zara.jpg',
      age: 24,
      nationality: '🇫🇷 France',
      occupation: '패션 바이어',
      personality: 'ENTP-T · 4w3',
      alignment: '혼돈의 중립',
      height: '170cm',
      appearance: '올리브색 피부, 여우상, 짙은 갈색 눈, 풍성한 흑발 웨이브',
      traits: '교활함 · 밀당의 고수 · 도발적 · 쿨한 척',
      secrets: '특별하지 않다는 콤플렉스 · 남자를 조종하며 가치 증명',
      preferences: '에징 · 오르가즘 통제 · 가벼운 결박 · 딥스로트 · 사정 방지',
      weakness: '뒷목 키스 · 머리채 잡기',
      gradient: 'from-purple-400 via-indigo-400 to-violet-400',
      border: 'border-purple-500/50',
    },
  ];

  return (
    <section id="contestants" className="py-12 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Meet the Contestants
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            아름답고 위험한 6명의 남녀. 그들의 숨겨진 의도와 절박한 비밀.
          </p>
        </div>

        {/* 
            모바일 대응 핵심: 
            grid-cols-1 (모바일: 1줄) -> md:grid-cols-2 (태블릿: 2줄) -> lg:grid-cols-3 (PC: 3줄)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contestants.map((contestant, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900 rounded-2xl overflow-hidden border ${contestant.border} transition-all duration-500 hover:scale-[1.02]`}
            >
              {/* 이미지 높이: 모바일에서는 조금 작게(h-80), PC에서는 크게(h-96) */}
              <div className="relative h-80 md:h-96 w-full overflow-hidden">
                <img 
                  src={contestant.image} 
                  alt={contestant.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* 이미지 없을 때 대체 화면 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contestant.gradient} opacity-20 hidden items-center justify-center flex-col gap-4`}>
                   <Users className="w-16 h-16 text-white opacity-50" />
                   <span className="text-white text-sm opacity-50">이미지 준비중</span>
                </div>

                {/* 
                    [수정됨] 텍스트 가독성 확보를 위한 '진한' 그라데이션 오버레이 
                    밑부분을 거의 검은색(via-black/80)으로 만들어서 글자가 선명하게 보이게 함
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-100"></div>
                
                <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
                  {/* 이름: 모바일 text-3xl, PC text-4xl */}
                  <h3 className={`text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r ${contestant.gradient} bg-clip-text text-transparent drop-shadow-lg`}>
                    {contestant.name}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 text-gray-200 text-xs md:text-sm font-bold">
                    <span className="bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/10">{contestant.nationality}</span>
                    <span>•</span>
                    <span className="bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/10">{contestant.age}세</span>
                    <span>•</span>
                    <span className="bg-white/10 px-2 py-1 rounded backdrop-blur-md border border-white/10">{contestant.occupation}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-4 md:space-y-5 bg-gray-900">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-black/40 p-3 rounded-lg border border-gray-800">
                    <div className="text-gray-500 text-xs mb-1 font-bold">PERSONALITY</div>
                    <div className="text-white font-semibold truncate">{contestant.personality}</div>
                  </div>
                  <div className="bg-black/40 p-3 rounded-lg border border-gray-800">
                    <div className="text-gray-500 text-xs mb-1 font-bold">HEIGHT</div>
                    <div className="text-white font-semibold">{contestant.height}</div>
                  </div>
                </div>

                <div>
                    <div className="text-xs font-bold text-gray-500 mb-1">APPEARANCE</div>
                    <p className="text-sm text-gray-300 leading-relaxed">{contestant.appearance}</p>
                </div>

                <div className="bg-red-950/20 p-4 rounded-xl border border-red-900/30">
                  <div className="text-xs font-bold text-red-400 flex items-center gap-1 mb-2">
                    <Heart size={14} fill="currentColor" /> DARK SECRETS
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {contestant.secrets}
                  </p>
                </div>

                 <div className="bg-purple-950/20 p-4 rounded-xl border border-purple-900/30">
                  <div className="text-xs font-bold text-purple-400 flex items-center gap-1 mb-2">
                    <Flame size={14} fill="currentColor" /> PREFERENCES
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {contestant.preferences}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContestantsSection;