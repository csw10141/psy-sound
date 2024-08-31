import React from 'react';
import { Link } from 'react-router-dom';

function AudioList({ audios }) {
  return (
    <ul>
      {audios.map(audio => (
        <li key={audio.id}>
          <Link to={`/audio/${audio.id}`}>{audio.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AudioList;
