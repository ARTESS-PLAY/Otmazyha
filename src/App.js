import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import MainPage from './pages/MainPage';
import GamePage from './pages/GamePage';
import RulsPage from './pages/RulsPage';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='game' element={<GamePage/>}/>
          <Route path='ruls' element={<RulsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
