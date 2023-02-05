import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Journey from './components/Journey';
import Station from './components/Station';

ReactDOM.render(

    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/journey' element={<Journey/>}/>
        <Route path='/station' element={<Station/>}/>
      </Routes>
    </Router>,

    document.getElementById('root')
);