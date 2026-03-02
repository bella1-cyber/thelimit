const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2djJoLTJ2LTJoMnptMCAwaDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <div className="mb-8">
          <span className="text-crimson text-sm font-bold tracking-widest uppercase bg-crimson/10 px-6 py-2 rounded-full border border-crimson/30">
            19금 성인 서바이벌 리얼리티
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
            THE LIMIT
          </span>
        </h1>

        <p className="text-3xl md:text-4xl font-light text-gray-300 mb-4 tracking-wide">
          극한의 참기 게임
        </p>

        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mb-8"></div>

        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
          14일. 6명의 남녀. 고립된 섬.<br />
          <span className="text-rose-400">모든 것이 허용되지만, 단 한 가지는 금지된다.</span>
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg px-8 py-4">
            <div className="text-5xl font-bold text-crimson">$100K</div>
            <div className="text-sm text-gray-400 mt-1">시작 상금</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg px-8 py-4">
            <div className="text-5xl font-bold text-crimson">14</div>
            <div className="text-sm text-gray-400 mt-1">유혹의 기간 (일)</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg px-8 py-4">
            <div className="text-5xl font-bold text-crimson">WINNER</div>
            <div className="text-sm text-gray-400 mt-1">승자 독식</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroSection;