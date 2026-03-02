import { Building2, Bed, Droplets, Eye, Lock } from 'lucide-react';

const ResortSection = () => {
  return (
    <section id="resort" className="relative py-24 overflow-hidden">
      
      {/* 배경 수정: 흐림 제거, 어두운 막 줄임 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./images/resort-bg.jpg" 
          alt="Resort Background" 
          className="w-full h-full object-cover scale-105"
        />
        {/* bg-black/50 으로 변경해서 배경 잘 보이게 함 */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Clarité Resort
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
            유리와 욕망으로 지어진 18층의 건축학적 걸작.<br />
            역사상 가장 대담한 사회 실험을 위해 오픈 전 독점 공개됩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* 카드들: 가독성을 위해 배경을 조금 더 진하게 (bg-black/70) */}
          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:bg-black/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">로비</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  바닥 아래로 바다가 훤히 들여다보이는 투명 유리 바닥. 강렬한 첫인상이 모든 분위기를 압도합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:bg-black/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bed className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">공용 침실</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  원형으로 배치된 8개의 침대와 그 중심에 놓인 단 하나의 특별한 침대. 개방형 천장 구조로 숨을 곳은 어디에도 없습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:bg-black/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">인피니티 풀</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  리조트 전체를 감싸는 수영장과 수중 바(Bar). 밤이 되면 보랏빛과 분홍빛 조명이 몽환적인 분위기를 연출합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-xl p-6 hover:border-rose-500/50 transition-all duration-300 hover:bg-black/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-rose-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">공용 욕실</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  반투명 유리 부스. 이곳에서 프라이버시는 보장된 권리가 아닌 사치입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:bg-black/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">오큘러스</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  관리자 전용 구역. 모든 참가자의 인터뷰와 실시간 CCTV를 확인할 수 있습니다. 정보가 곧 권력입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:bg-black/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">스위트 룸</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  벌칙 면제 구역. 초커 비활성화. 무제한의 쾌락이 허용됩니다. (입장료: 1회 $5,000)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/60 via-pink-900/60 to-rose-900/60 border border-pink-500/30 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
            <h3 className="text-2xl font-bold text-white">전면 유리 아키텍처</h3>
            <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-center text-gray-200">
            모든 객실은 천장부터 바닥까지 통유리로 되어 있습니다. 바다가 지켜보고, 카메라가 기록하며, 그 어떤 비밀도 숨길 수 없습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResortSection;
