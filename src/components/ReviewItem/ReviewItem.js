import React from "react";
import s from "../ReviewItem/ReviewItem.module.css";
import user from "../../media/user.svg";

const ReviewItem = (props) => {
  return (
    <>
      <div className={s.review_card}>
        <img src={props.img} alt="" className={s.user_icon} />

        <div className={s.info_customer}>
          <p className={s.name_customer}>Тилек Уларбеков </p>
          <p className={s.bought_good}>ворота стальные</p>
        </div>

        <p className={s.review_text}>
          Ворота стоят уже более двух лет. За это время с ними не было никаких
          проблем. Спасибо, Selim Trade!
        </p>
      </div>
    </>
  );
};

export default ReviewItem;
