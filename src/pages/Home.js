import React, { useState } from 'react';
import AudioList from '../components/AudioList';

function Home() {
  const [audios, setAudios] = useState([
    { id: 1, title: "01_Fallen angel", url: "/audio/sample1.mp3" },
    { id: 2, title: "02_실낙원", url: "/audio/sample2.mp3" },
    { id: 3, title: "03_두 나무", url: "/audio/03_두 나무.mp3" },
    { id: 4, title: "05_신기루", url: "/audio/05_신기루.mp3" },
    { id: 5, title: "06_심판 그리고 구원", url: "/audio/06_심판 그리고 구원.mp3" },
    { id: 6, title: "07_Tower of BABLE", url: "/audio/07_Tower of BABLE.mp3" },
    { id: 7, title: "08_달콤한 유혹", url: "/audio/08_달콤한 유혹.mp3" },
    { id: 8, title: "12_사람의 마음", url: "/audio/12_사람의 마음.mp3" },
  ]);

  return (
    <div>
      <h2>Available Audios</h2>
      <AudioList audios={audios} />
    </div>
  );
}

export default Home;
