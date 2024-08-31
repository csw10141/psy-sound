import React from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';

function AudioDetail() {
  const { id } = useParams();
  const audioData = {
    1: { title: "01_Fallen angel", url: "/audio/sample1.mp3", img: "/images/sample1.png",description: "Fallen Angel", subdescription: "하나님보다 높아지고자 했던 범죄한 천사가 심판 받아 하늘에서 떨어지는 장면을 몽환적으로 표현한 작품이다. 하늘에서 떨어지는 모습은 타인에 의한 정죄, 판단으로 인한 것일 수도 있지만 자신이 지은 잘못으로 인해 스스로를 가두는 모양으로 보이기도 한다. 떨어지는 모습은 사14장에서 천사가 범죄후 하늘에서 쫒겨나 것에서 기안하며 이미지를 표현하였다."},
    2: { title: "02_실낙원", url: "/audio/sample2.mp3", img: "/images/sample1.png",description: "This is the first sample audio description."},
    3: { title: "03_두 나무", url: "/audio/sample3.mp3", img: "/images/sample1.png",description: "This is the first sample audio description."},
    4: { title: "05_신기루", url: "/audio/sample5.mp3", img: "/images/sample1.png",description: "This is the first sample audio description."},
    5: { title: "06_심판 그리고 구원", url: "/audio/sample6.mp3", img: "/images/sample1.png",description: "This is the first sample audio description."},
    6: { title: "07_Tower of BABLE", url: "/audio/sample7.mp3", img: "/images/sample1.png",description: "This is the first sample audio description."},
    7: { title: "08_달콤한 유혹", url: "/audio/sample8.mp3", img: "/images/sample1.png",description: "This is the first sample audio description."},
    8: { title: "12_사람의 마음", url: "/audio/sample12.mp3", img: "/images/sample1.png",description: "This is the first sample audio description."},
  };

  const audio = audioData[id];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={audio.img} alt={audio.title} className="img-fluid rounded" />
        </div>
        <p></p>
        <div className="col-md-8">
          <h2>{audio.title}</h2>
          <p>{audio.description}</p>
          <p>{audio.subdescription}</p>
          <p></p>
        </div>
      </div>
      <AudioPlayer src={audio.url} />
    </div>
  );
}

export default AudioDetail;
