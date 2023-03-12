import React from 'react';
import Slider from "../Swiper/Slider";

const ReviewList = () => {
  let url="https://sms-h9zb.onrender.com/user"
  return (
    <>
      <div>
        <Slider url={url}/>
      </div>
      
    </>
  );
};

export default ReviewList;
