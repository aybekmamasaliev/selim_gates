import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import GatesPage from './pages/GatesPage/GatesPage';
import AllNewsPage from './pages/AllNewsPage/AllNewsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage.js';
// import Slider from './components/Slider/Slider';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/news" element={<AllNewsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services/1" element={<GatesPage />} />
          {/* <Route path='/swiper' element={<Slider />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
