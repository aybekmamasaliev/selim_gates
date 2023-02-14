import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';
import NewsList from './components/News/NewsList';
import OurServices from './components/OurServices/OurServices';
import ReviewItem from './components/ReviewItem/ReviewItem';
import ReviewList from './components/ReviewList/ReviewList';
// import Btn from './components/Btn/Btn';

function App() {
  return (
    <div>
      <Form/>
      <OurServices />
      <NewsList/>
      {/* <Modal /> */}
      {/* <Btn /> */}
      <ReviewList />
    </div>
  );
}

export default App;
