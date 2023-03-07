import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import s from "./WeProvideSlider.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import item from "../../media/item4.svg";
import "swiper/css";
import DoorName from "../DoorName/DoorName";
import left from "../../media/left.svg";
import right from "../../media/right.svg";
import SwiperButtonNext from "../NextBtn/NextBtn";
import SwiperButtonPrev from "../PrevBtn/PrevBtn";
const WeProvideSlider = () => {
  return (
    <div className={s.to_hide}>
      <Swiper
        slidesPerView={"auto"}
        className={s.slider_cover}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={1}
      >
        <div>
          <SwiperSlide className={s.per_slide}>
            <div className={s.gates_item}>
              <img src={item} alt="" className={s.img} />
              <DoorName>Автоматика</DoorName>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.per_slide}>
            <div className={s.gates_item}>
              <img src={item} alt="" className={s.img} />
              <DoorName>Автоматика</DoorName>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.per_slide}>
            <div className={s.gates_item}>
              <img src={item} alt="" className={s.img} />
              <DoorName>Автоматика</DoorName>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.per_slide}>
            <div className={s.gates_item}>
              <img src={item} alt="" className={s.img} />
              <DoorName>Автоматика</DoorName>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.per_slide}>
            <div className={s.gates_item}>
              <img src={item} alt="" className={s.img} />
              <DoorName>Автоматика</DoorName>
            </div>
          </SwiperSlide>
        </div>
        <div className={s.div_cover_btns}>
          <div className={s.upper_btn_div}>
            <SwiperButtonPrev>
              <button className={s.circle_btn}>
                <img src={left} alt="" />
              </button>
            </SwiperButtonPrev>
            <NavLink to={"/services"}>
              <Button isSecondary>смотреть все</Button>
            </NavLink>
            <SwiperButtonNext>
              <button className={s.circle_btn}>
                <img src={right} alt="" />
              </button>
            </SwiperButtonNext>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default WeProvideSlider;
