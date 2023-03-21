import React, { lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const GatesPage = lazy(() => import('./pages/GatesPage/GatesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage/GalleryPage.js'));
const SingleNewsPage = lazy(() =>
  import('./pages/SingleNewsPage/SingleNewsPage')
);
const TestNews = lazy(() => import('./pages/TestNews/TestNews'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Routes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/home" element={<MainPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/news" element={<TestNews />} />
            <Route path="/news/1" element={<SingleNewsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/services/1" element={<GatesPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
