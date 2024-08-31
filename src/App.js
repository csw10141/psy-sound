import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AudioDetail from './pages/AudioDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audio/:id" element={<AudioDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
