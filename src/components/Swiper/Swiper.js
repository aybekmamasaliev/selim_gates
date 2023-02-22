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
import "swiper/css/pagination";

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

  const [windowwidth, setWindowWidth] = useState(window.innerWidth);

  const setSize = () => {
    setWindowWidth(window.innerWidth);
    console.log(windowwidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  // console.log(num);

  return (
    <div className={s.slider_cover}>
      <p>{windowwidth}</p>
      {isloading ? (
        <p className={s.center}>loading</p>
      ) : (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          className={s.swiper}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1260: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {a.map((item) => {
            return (
              <SwiperSlide key={item._id} className={s.slide}>
                <ReviewItem key={item._id} img={item.img} />
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
