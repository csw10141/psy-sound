import React from 'react';
import { Link } from 'react-router-dom';

function AudioList({ audios }) {
  return (
    <div className="row">
      {audios.map(audio => (
        <div key={audio.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
            <Link to={`/audio/${audio.id}`}>
              <h5 className="card-title">{audio.title}</h5>
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AudioList;
