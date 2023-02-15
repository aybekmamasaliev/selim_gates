import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import NewsList from './components/News/NewsList';
import OurServices from './components/OurServices/OurServices';
import ReviewList from './components/ReviewList/ReviewList';
import OurWorks from "./components/OurWorks/OurWorks"

function App() {
  return (
    <div>
      <Form/>
      <OurServices />
      <NewsList/>
      <ReviewList />
      <OurWorks/>
    </div>
  );
}

export default App;
