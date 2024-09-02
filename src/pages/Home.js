import React, { useState } from 'react';
import AudioList from '../components/AudioList';

function Home() {
  const [audios] = useState([
    { id: 1, title: "01_Fallen angel", url: "/audio/sample1.mp3", img: "/images/01.png",description: "This is the first sample audio description."},
    { id: 2, title: "02_실낙원", url: "/audio/sample2.mp3", img: "/images/02.png",description: "This is the first sample audio description."},
    { id: 3, title: "03_두 나무", url: "/audio/sample3.mp3", img: "/images/03.png",description: "This is the first sample audio description."},
    { id: 4, title: "04_홍수", url: "/audio/sample5.mp3", img: "/images/04.png",description: "This is the first sample audio description."},
    { id: 5, title: "05_신기루", url: "/audio/sample6.mp3", img: "/images/05.png",description: "This is the first sample audio description."},
    { id: 6, title: "06_심판 그리고 구원", url: "/audio/sample7.mp3", img: "/images/06.png",description: "This is the first sample audio description."},
    { id: 7, title: "07_달콤한 유혹", url: "/audio/sample8.mp3", img: "/images/07.png",description: "This is the first sample audio description."},
    { id: 8, title: "08_사람의 마음", url: "/audio/sample12.mp3", img: "/images/08.png",description: "This is the first sample audio description."},
  ]);

  return (
    <div className="container mt-4" style={{backgroundImage:"/images/bg.png"}}>
      {/* <h2 className="text-center mb-4">Available Audios</h2> */}
      <AudioList audios={audios} />
    </div>
  );
}

export default Home;
