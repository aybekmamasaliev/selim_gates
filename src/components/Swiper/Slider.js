import React, { useEffect, useState } from "react";
import s from "./Slider.module.css";
import SwiperButtonNext from "../NextBtn/NextBtn";
import SwiperButtonPrev from "../PrevBtn/PrevBtn";
import left from "../../media/left.svg";
import right from "../../media/right.svg";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useGetGoodsQuery } from "../../redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const {data=[], isLoading}=useGetGoodsQuery();
  const swiper = useSwiper();

  return (
    <div className={s.slider_cover}>
      {isLoading ? (
        <p className={s.center}>loading</p>
      ) : (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            300: {
              initialSlide: 2,
              centeredSlides: false,
              slidesPerView: "auto",
            },
            780: {
              centeredSlides: true,
              slidesPerView: "auto",
            },
            1024: {
              centeredSlides: false,
              slidesPerView: 3,
            },
            1360: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item._id} className={s.slide}>
                <ReviewItem key={item._id} img={item.img} />
              </SwiperSlide>
            );
          })}

          <div className={s.div_cover_btns}>
            <div className={s.upper_btn_div}>
              <SwiperButtonPrev>
                <div className={s.circle_btn}>
                  <img src={left} alt="" />
                </div>
              </SwiperButtonPrev>
              <SwiperButtonNext>
                <div className={s.circle_btn}>
                  <img src={right} alt="" />
                </div>
              </SwiperButtonNext>
            </div>
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default Slider;