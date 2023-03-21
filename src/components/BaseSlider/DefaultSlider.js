import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import s from "./DefaultSlider.module.css";
import NewsItem from "../NewsItem/NewsItem";
import { useGetServicesQuery } from "../../redux";

const DefaultSlider = () => {
  const {data=[], isLoading}=useGetServicesQuery()

  return (
    <div className={s.margin100}>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Swiper
          className={s.sliders_cover}
          spaceBetween={10}
          slidesPerView={"auto"}
          centeredSlides={false}
          initialSlide={1}
        >
          <SwiperSlide className={s.per_slide}>
            <NewsItem url="hello world" />
          </SwiperSlide>
          <SwiperSlide className={s.per_slide}>
            <NewsItem url="hello world" />
          </SwiperSlide>
          <SwiperSlide className={s.per_slide}>
            <NewsItem url="hello world" />
          </SwiperSlide>
         
        </Swiper>
      )}
    </div>
  );
};

export default DefaultSlider;
