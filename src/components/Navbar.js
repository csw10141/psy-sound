import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Audio Streaming</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
