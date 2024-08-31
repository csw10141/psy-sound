import React from 'react';
import { Link } from 'react-router-dom';

function AudioList({ audios }) {
  return (
    <div className="row">
      {audios.map(audio => (
        <div key={audio.id} className="col-md-4 mb-4">
            <Link to={`/audio/${audio.id}`} style={{color:'#000', textDecoration:'none'}}>
                <div className="card h-100">
                    <div className="card-body">
                    <h5 className="card-title">{audio.title}</h5>
                    </div>
                </div>
            </Link>
        </div>
      ))}
    </div>
  );
}

export default AudioList;
