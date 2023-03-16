import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import s from "./SwiperAuto.module.css";
import { useGetServicesQuery } from "../../redux";

const SwiperAuto = () => {
  const { data = [], isLoading } = useGetServicesQuery();
  return (
    <>
      <Swiper spaceBetween={20} slidesPerView={"auto"} className={s.dis_n}>
        {data.map((item) => (
          <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
              <img src={item.image} alt="" />
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperAuto;
