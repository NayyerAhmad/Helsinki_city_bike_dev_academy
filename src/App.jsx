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
          <li><Link to="/journey">Home</Link></li>
          <li><Link to="/station">Home</Link></li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default App;
