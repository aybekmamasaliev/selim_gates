import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import s from "./DefaultSlider.module.css";
import NewsItem from "../NewsItem/NewsItem";

const DefaultSlider = (props) => {
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
    <div className={s.margin100}>
      {isloading ? (
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
