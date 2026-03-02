import { Coffee, Flame, Moon, Clock } from 'lucide-react';

const RoutineSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Daily Routine
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            긴장감, 친밀감, 그리고 유혹을 극대화하기 위해 치밀하게 설계된 24시간의 사이클.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-950/20 to-orange-950/20 border border-amber-500/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Coffee className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">오전</h3>
                <p className="text-amber-300">09:00 - 12:00</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">•</span>
                <span>공용 침실에서 기상</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">•</span>
                <span>오픈 키친에서 함께하는 아침 식사</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">•</span>
                <span>수영장과 해변에서의 자유 시간</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">•</span>
                <span>자연스러운 스킨십과 가벼운 친밀감 형성</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-950/20 to-red-950/20 border border-orange-500/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Flame className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">오후</h3>
                <p className="text-orange-300">13:00 - 18:00</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span><strong className="text-white">데일리 미션:</strong> 친밀감 유도 챌린지</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>긴장감 넘치는 경쟁 게임</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>우승자는 스위트 룸 프리패스 획득</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">•</span>
                <span>전략적 동맹과 라이벌 관계 형성</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-950/20 to-pink-950/20 border border-purple-500/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Moon className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">저녁</h3>
                <p className="text-purple-300">19:00 - 24:00</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>와인을 곁들인 럭셔리 디너 파티</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>자유 데이트 시간 - 1:1 만남</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>당신은 오큘러스(감시실) 접근 권한 획득</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>알코올은 경계심을 낮추고 판돈을 키웁니다</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-950/20 to-blue-950/20 border border-indigo-500/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">심야</h3>
                <p className="text-indigo-300">00:00 - 08:00</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span><strong className="text-white">자정 파트너 익명 투표</strong> 진행</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span>공용 침실 복귀</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span>야간 기습(Night raids) 및 은밀한 스킨십 허용</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1">•</span>
                <span>어둠은 가려주지만 카메라는 잠들지 않습니다</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm text-center">
          <p className="text-2xl text-gray-200 italic leading-relaxed">
            "매 시간은 한계를 시험하도록 설계되었습니다. 모든 상호작용은 계산된 위험입니다.<br />
            <span className="text-rose-400">낮을 견디고 밤을 지배하세요. 그렇지 않으면 모든 것을 잃게 될 것입니다."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoutineSection;