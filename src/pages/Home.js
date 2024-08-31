import React, { useState } from 'react';
import AudioList from '../components/AudioList';

function Home() {
  const [audios, setAudios] = useState([
    { id: 1, title: "01_Fallen angel", url: "/audio/sample1.mp3" },
    { id: 2, title: "02_실낙원", url: "/audio/sample2.mp3" },
  ]);

  return (
    <div>
      <h2>Available Audios</h2>
      <AudioList audios={audios} />
    </div>
  );
}

export default Home;
