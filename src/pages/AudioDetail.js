import React from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';

function AudioDetail() {
  const { id } = useParams();
  const audio = {
    1: { title: "01_Fallen angel", url: "/audio/sample1.mp3" },
    2: { title: "02_실낙원", url: "/audio/sample2.mp3" },
  }[id];

  return (
    <div>
      <h2>{audio.title}</h2>
      <AudioPlayer src={audio.url} />
    </div>
  );
}

export default AudioDetail;
