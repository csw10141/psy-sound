import React from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';

function AudioDetail() {
  const { id } = useParams();
  const audio = {
    1: { title: "01_Fallen angel", url: "/audio/sample1.mp3" },
    2: { title: "02_실낙원", url: "/audio/sample2.mp3" },
    3: { title: "03_두 나무", url: "/audio/sample3.mp3" },
    4: { title: "05_신기루", url: "/audio/sample5.mp3" },
    5: { title: "06_심판 그리고 구원", url: "/audio/sample6.mp3" },
    6: { title: "07_Tower of BABLE", url: "/audio/sample7.mp3" },
    7: { title: "08_달콤한 유혹", url: "/audio/sample8.mp3" },
    8: { title: "12_사람의 마음", url: "/audio/sample12.mp3" },
  }[id];

  return (
    <div>
      <h2>{audio.title}</h2>
      <AudioPlayer src={audio.url} />
    </div>
  );
}

export default AudioDetail;
