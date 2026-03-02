import { DollarSign, AlertTriangle, Shield, Zap, Heart, TrendingDown } from 'lucide-react';

const RulesSection = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              Rules & Economy
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            쾌락에는 대가가 따르고 유혹이 곧 화폐가 되는 잔혹한 경제 시스템.
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-br from-red-950/30 via-rose-950/30 to-pink-950/30 border-2 border-red-500/50 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">핵심 목표</h3>
              <p className="text-red-300">14일간의 극한 인내</p>
            </div>
          </div>
          <div className="bg-black/50 rounded-xl p-6 border border-red-500/30">
            <p className="text-xl text-gray-200 mb-3">
              <span className="text-green-400 font-bold">✓ 허용 (ALLOWED):</span> 모든 형태의 신체 접촉 및 스킨십
            </p>
            <p className="text-xl text-gray-200">
              <span className="text-red-400 font-bold">✗ 금지 (FORBIDDEN):</span> 절정 도달 (사정 / 오르가즘)
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">초기 자금</h3>
                <p className="text-3xl font-bold text-green-400">$100,000</p>
              </div>
            </div>
            <p className="text-gray-400">
              모든 NPC 참가자는 $100K(약 1.3억 원)를 가지고 시작합니다. 당신은 $0에서 시작하지만 타인의 돈을 약탈할 수 있습니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">벌금</h3>
                <p className="text-3xl font-bold text-red-400">-$10,000</p>
              </div>
            </div>
            <p className="text-gray-400">
              절정에 도달할 때마다 상금에서 $10,000가 즉시 차감됩니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">약탈 시스템</h3>
                <p className="text-3xl font-bold text-purple-400">+$5,000</p>
              </div>
            </div>
            <p className="text-gray-400">
              상대를 유혹해 절정에 이르게 하면, 상대의 벌금 중 절반인 $5,000를 약탈하여 내 상금으로 가져옵니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">파산</h3>
                <p className="text-3xl font-bold text-orange-400">$0</p>
              </div>
            </div>
            <p className="text-gray-400">
              잔고가 $0이 되면 우승 자격을 영구 박탈당합니다. 이후 해당 참가자는 타인을 위한 "공공재(Public Resource)"로 전락합니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-950/30 to-purple-950/30 border border-blue-500/50 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">야간 투표</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              매일 자정, 참가자들은 파트너를 익명으로 투표합니다. 최다 득표자는 원하는 상대를 지목하여 24시간 동안 파트너가 될 권한을 얻습니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-950/30 to-rose-950/30 border border-pink-500/50 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">면제 구역</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              상호 동의 필요. 초커가 비활성화되며 무제한의 쾌락이 허용됩니다. 비용: 인당 $5,000 (소각되며 약탈 불가).
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-rose-900/20 via-pink-900/20 to-purple-900/20 border border-rose-500/30 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">바이오 초커 기술</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            로즈골드 프레임의 스마트 목걸이가 실시간으로 흥분도를 모니터링하며 LED로 상태를 표시합니다. 절정 도달을 자동으로 감지하여 즉시 벌금을 부과합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;