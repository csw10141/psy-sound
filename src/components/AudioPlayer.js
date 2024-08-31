import React from 'react';
import './styles.css';

function AudioPlayer({ src }) {
  return (
    <div className="audio-player fixed-bottom bg-dark text-white p-3">
      <audio controls autoPlay className="w-100">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
