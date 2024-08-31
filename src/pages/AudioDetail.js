import React from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';

function AudioDetail() {
  const { id } = useParams();
  const audioData = {
    1: { title: "01_Fallen angel", url: "/audio/sample1.mp3", img: "/images/sample1.jpg",description: "This is the first sample audio description."},
    2: { title: "02_실낙원", url: "/audio/sample2.mp3", img: "/images/sample1.jpg",description: "This is the first sample audio description."},
    3: { title: "03_두 나무", url: "/audio/sample3.mp3", img: "/images/sample1.jpg",description: "This is the first sample audio description."},
    4: { title: "05_신기루", url: "/audio/sample5.mp3", img: "/images/sample1.jpg",description: "This is the first sample audio description."},
    5: { title: "06_심판 그리고 구원", url: "/audio/sample6.mp3", img: "/images/sample1.jpg",description: "This is the first sample audio description."},
    6: { title: "07_Tower of BABLE", url: "/audio/sample7.mp3", img: "/images/sample1.jpg",description: "This is the first sample audio description."},
    7: { title: "08_달콤한 유혹", url: "/audio/sample8.mp3", img: "/images/sample1.jpg",description: "This is the first sample audio description."},
    8: { title: "12_사람의 마음", url: "/audio/sample12.mp3", img: "/images/sample1.jpg",description: "This is the first sample audio description."},
  };

  const audio = audioData[id];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={audio.img} alt={audio.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h2>{audio.title}</h2>
          <p>{audio.description}</p>
        </div>
      </div>
      <AudioPlayer src={audio.url} />
    </div>
  );
}

export default AudioDetail;
