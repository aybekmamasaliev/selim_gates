import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import NewsList from './components/News/NewsList';
import OurServices from './components/OurServices/OurServices';
import ReviewList from './components/ReviewList/ReviewList';

function App() {
  return (
    <div>
      <Form/>
      <OurServices />
      <NewsList/>
      <ReviewList />
    </div>
  );
}

export default App;
