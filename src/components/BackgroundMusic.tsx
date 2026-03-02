const BackgroundMusic = () => {
  // 🎵 유저님이 주신 유튜브 영상 ID
  const YOUTUBE_VIDEO_ID = "cpYbnpuS1xQ"; 

  return (
    <div className="fixed bottom-0 right-0 w-0 h-0 opacity-0 pointer-events-none overflow-hidden">
      <iframe
        width="1"
        height="1"
        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&mute=0`}
        title="Background Music"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundMusic;