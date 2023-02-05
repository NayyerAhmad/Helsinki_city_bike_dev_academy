import React from 'react';
import Home from './components/Home';
import Journey from './components/Journey';
import Station from './components/Station';
import {Link, Route, Routes, Navigate } from 'react-router-dom'

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/journey">Journey</Link></li>
          <li><Link to="/station">Station</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          {/* api will come here */}
        </Routes>
      </main>
      <div className="footer">
        <p>made by Nayyer Ahmad for Solita Dev Academy</p>
      </div>
    </React.Fragment>
  );
}

export default App;
