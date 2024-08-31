import React from 'react';

function AudioPlayer({ src }) {
  return (
    <div className="text-center">
      <audio controls autoPlay className="w-75">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
