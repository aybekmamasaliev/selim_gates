import React from "react";
import s from "../ReviewItem/ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <>
      <div className={s.test_fix}>
        <div className={s.review_card}>
          <img src={props.img} alt="" className={s.user_icon} />
          <div className={s.info_customer}>
            <p className={s.name_customer}>{props.first_name} {props.last_name}</p>
            <p className={s.bought_good}>{props.category_name}</p>
          </div>
          <p className={s.review_text}>
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
