import React, { useEffect, useRef } from 'react';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    // 세션 스토리지에서 재생 상태를 가져옴
    const wasPlaying = sessionStorage.getItem('isPlaying') === 'true';
    if (wasPlaying) {
      audioRef.current.play();
    }

    // 재생이 시작되면 세션 스토리지에 저장
    const handlePlay = () => {
      sessionStorage.setItem('isPlaying', 'true');
    };

    // 재생이 중지되면 세션 스토리지에 저장
    const handlePause = () => {
      sessionStorage.setItem('isPlaying', 'false');
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('pause', handlePause);

    return () => {
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div className="audio-player fixed-bottom bg-dark text-white p-3">
      <audio ref={audioRef} controls autoPlay className="w-100">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
