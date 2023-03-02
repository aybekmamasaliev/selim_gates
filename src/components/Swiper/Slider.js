import React, { useEffect, useState } from "react";
import s from "./Slider.module.css";
import SwiperButtonNext from "../NextBtn/NextBtn";
import SwiperButtonPrev from "../PrevBtn/PrevBtn";
import left from "../../media/left.svg";
import right from "../../media/right.svg";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
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

  return (
    <div className={s.slider_cover}>
      <p>{windowwidth}</p>
      {isloading ? (
        <p className={s.center}>loading</p>
      ) : (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            330: {
              centeredSlides:true,
              slidesPerView: "auto",  
            },
            680: {
              centeredSlides:false,
              slidesPerView: 2,
            },
            780: {
              centeredSlides:true,
              slidesPerView: "auto",
            },
            1024: {
              centeredSlides:false,
              slidesPerView: 3,
            },
            1360: {
              slidesPerView: 4,
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
