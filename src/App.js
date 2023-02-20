import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';


import GatesPage from './pages/GatesPage/GatesPage';


const App = () => {
  return (



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/services" element={<GatesPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
