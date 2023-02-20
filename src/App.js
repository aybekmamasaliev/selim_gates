import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Services from './pages/Services/Services';
import GatesPage from './pages/GatesPage/GatesPage';

function App(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/1" element={<GatesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
