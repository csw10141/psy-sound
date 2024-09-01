import React, { useEffect } from 'react';

function AudioPlayer({ src }) {
  useEffect(() => {
    // 세션 스토리지에서 재생 상태를 가져옴
    const wasPlaying = sessionStorage.getItem('isPlaying') === 'true';
    if (wasPlaying) {
      const iframe = document.getElementById('audio-iframe');
      if (iframe) {
        iframe.contentWindow.postMessage('play', '*');
      }
    }
  }, []);

  return (
    <div className="audio-player fixed-bottom bg-dark text-white p-3">
      <iframe
        id="audio-iframe"
        src={`/audio-iframe.html?src=${encodeURIComponent(src)}`}
        allow="autoplay"
        className="w-100"
        style={{ height: '60px', border: 'none' }}
        title="Audio Player"
      ></iframe>
    </div>
  );
}

export default AudioPlayer;
