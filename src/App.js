import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import GatesPage from './pages/GatesPage/GatesPage';
import AllNewsPage from './pages/AllNewsPage/AllNewsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage.js';
import SingleNewsPage from './pages/SingleNewsPage/SingleNewsPage';
import TestNews from './pages/TestNews/TestNews';
import Hand from './components/Hand/Hand';
import SwiperAuto from './components/SwiperAuto/SwiperAuto';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/news" element={<TestNews />} />
          <Route path="/news/1" element={<SingleNewsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services/1" element={<GatesPage />} />
          <Route path='/test' element={<Hand />} />
          <Route path="/1" element={<SwiperAuto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
