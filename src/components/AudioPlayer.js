import React, { useEffect, useRef } from 'react';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const wasPlaying = sessionStorage.getItem('isPlaying') === 'true';
    const savedTime = sessionStorage.getItem('currentTime');
    if (savedTime !== null) {
      audioRef.current.currentTime = parseFloat(savedTime);
    }
    if (wasPlaying) {
      audioRef.current.play();
    }

    const handlePlay = () => {
      sessionStorage.setItem('isPlaying', 'true');
    };

    const handlePause = () => {
      sessionStorage.setItem('isPlaying', 'false');
    };

    const handleTimeUpdate = () => {
      sessionStorage.setItem('currentTime', audioRef.current.currentTime);
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('pause', handlePause);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
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
