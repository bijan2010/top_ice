import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Mine from './components/Mine';
import Friends from './components/Friends';
import Earn from './components/Earn';
import Airdrop from './components/Airdrop';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/airdrop" element={<Airdrop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
