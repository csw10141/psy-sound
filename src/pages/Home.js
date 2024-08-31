import React, { useState } from 'react';
import AudioList from '../components/AudioList';

function Home() {
  const [audios, setAudios] = useState([
    { id: 1, title: "01_Fallen angel", url: "/audio/sample1.mp3"},
    { id: 2, title: "02_실낙원", url: "/audio/sample2.mp3"},
    { id: 3, title: "03_두 나무", url: "/audio/sample3.mp3"},
    { id: 4, title: "05_신기루", url: "/audio/sample5.mp3"},
    { id: 5, title: "06_심판 그리고 구원", url: "/audio/sample6.mp3"},
    { id: 6, title: "07_Tower of BABLE", url: "/audio/sample7.mp3"},
    { id: 7, title: "08_달콤한 유혹", url: "/audio/sample8.mp3"},
    { id: 8, title: "12_사람의 마음", url: "/audio/sample12.mp3"},
  ]);

  return (
    <div className="container mt-4">
      {/* <h2 className="text-center mb-4">Available Audios</h2> */}
      <AudioList audios={audios} />
    </div>
  );
}

export default Home;
