import { Palmtree, Waves, Sun } from 'lucide-react';

const IslandSection = () => {
  return (
    <section id="island" className="relative py-24 overflow-hidden">
      
      {/* 배경 수정: 흐림 제거, 어두운 막 줄임 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./images/island-bg.jpg" 
          alt="Island Background" 
          className="w-full h-full object-cover scale-105" 
        />
        {/* bg-black/40 으로 변경해서 배경이 더 잘 보이게 함 */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ... (아래 내용은 기존과 동일하므로 생략하지 않고 전체 다 드립니다!) */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Saint Mirage Island
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
            에메랄드빛 바다와 핑크빛 모래사장이 만나는 남태평양의 프라이빗 파라다이스.<br />
            극한의 인내심을 시험하기 위한 완벽한 무대입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Waves className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">에메랄드빛 바다</h3>
            <p className="text-gray-300 leading-relaxed">
              섬을 감싸는 수정처럼 맑은 청록색 바다는 수영과 수중 활동을 즐기기에 완벽합니다.
            </p>
          </div>

          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Palmtree className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">핑크 샌드 비치</h3>
            <p className="text-gray-300 leading-relaxed">
              희귀한 분홍빛 모래사장은 은밀한 만남을 위한 낭만적이고 이국적인 분위기를 자아냅니다.
            </p>
          </div>

          <div className="bg-black/70 backdrop-blur-md border border-gray-600 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sun className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">한여름의 파라다이스</h3>
            <p className="text-gray-300 leading-relaxed">
              2026년 7월 - 끝없이 쏟아지는 햇살과 열대의 뜨거운 열기가 매 순간을 더욱 강렬하게 만듭니다.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-900/60 via-teal-900/60 to-cyan-900/60 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
          <p className="text-lg text-white text-center italic font-medium">
            "럭셔리와 원초적 본능이 만나는 고립된 낙원. 도망칠 곳도, 방해물도 없습니다. 오직 유혹만이 존재할 뿐."
          </p>
        </div>
      </div>
    </section>
  );
};

export default IslandSection;
