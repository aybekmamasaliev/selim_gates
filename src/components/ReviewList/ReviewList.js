import React from 'react';
import Slider from "../Swiper/Slider";
// import s from './ReviewList.module.css';
// import ReviewItem from '../ReviewItem/ReviewItem';
// import right from '../../media/right.svg';
// import left from '../../media/left.svg';

const ReviewList = () => {
  let url="https://sms-h9zb.onrender.com/user"
  return (
    <>
      <div>
        {/* <div className={s.dis_f}>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
        <div className={s.swipe_revs}>
          <button className={s.circle_btn}>
            <img src={left} alt="" className={s.center} />
          </button>
          <button className={s.circle_btn}>
            <img src={right} alt="" className={s.center} />
          </button>
        </div> */}
        <Slider url={url}/>
      </div>
      
    </>
  );
};

export default ReviewList;
