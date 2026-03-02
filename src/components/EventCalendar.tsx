import { Calendar } from 'lucide-react';

const EventCalendar = () => {
  const events = [
    { 
      day: 1, 
      title: '입소식', 
      description: '바이오 초커 착용 및 첫인상 투표 진행' 
    },
    { 
      day: 3, 
      title: '블라인드 터치', 
      description: '시각이 차단된 상태에서 오직 촉각으로 신체 부위 식별' 
    },
    { 
      day: 5, 
      title: '무인도 데이트', 
      description: '선택된 커플 24시간 완전 격리 (카메라만 존재)' 
    },
    { 
      day: 7, 
      title: '풀 파티 쇼다운', 
      description: '스위트 룸 프리패스(벌칙 면제권) 쟁탈전' 
    },
    { 
      day: 10, 
      title: '페로몬 파티', 
      description: '안대를 착용한 채 오직 향기와 촉각만으로 파트너 선정' 
    },
    { 
      day: 12, 
      title: '위험한 진실 게임', 
      description: '은밀한 신체 접촉 벌칙이 따르는 극한의 질문들' 
    },
    { 
      day: 14, 
      title: '최후의 심판', 
      description: '최종 상금 정산 및 우승자 발표' 
    },
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              14-Day Event Calendar
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            가장 강인한 의지마저 꺾어버리기 위해 설계된, 점차 강도가 높아지는 전략적 챌린지.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-cyan-400 font-bold mb-1">DAY {event.day}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">{event.description}</p>

              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">긴장도</span>
                  <div className="flex gap-1">
                    {[...Array(Math.min(5, Math.ceil(event.day / 2)))].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-4 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">7</div>
              <div className="text-gray-400">주요 이벤트</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">14</div>
              <div className="text-gray-400">생존 기간 (일)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1</div>
              <div className="text-gray-400">최후의 승자</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;