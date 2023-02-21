import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Swiper.module.css";
import "swiper/css";
import React, { useEffect, useState } from "react";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import SwiperButtonNext from "../NextBtn/NextBtn";
import SwiperButtonPrev from "../PrevBtn/PrevBtn";
import left from "../../media/left.svg";
import right from "../../media/right.svg";
import ReviewItem from "../ReviewItem/ReviewItem";


const Slider = (props) => {
  const swiper = useSwiper();
  const [a, setA] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch(props.url)
      .then((res) => {
        setIsloading(true);
        return res.json();
      })
      .then((data) => setA(data))
      .finally(() => setIsloading(false));
  }, []);

  return (
    <div className={s.slider_cover}>
      {isloading ? (
        <p>loading</p>
      ) : (
        <Swiper spaceBetween={10} slidesPerView={3} className={s.swiper}>
          {a.map((item) => {
            return (
              <SwiperSlide key={item._id} className={s.slide}>
                <ReviewItem key={item._id} img={item.img}/>
              </SwiperSlide>
            );
          })}

          <div className={s.div_cover_btns}>
            <div className={s.upper_btn_div}>
              <SwiperButtonPrev>
                
                <button className={s.circle_btn}>
                  <img src={left} alt="" />
                </button>
              </SwiperButtonPrev>
              <SwiperButtonNext>
                <button className={s.circle_btn}>
                  <img src={right} alt="" />
                </button>
              </SwiperButtonNext>
            </div>
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
