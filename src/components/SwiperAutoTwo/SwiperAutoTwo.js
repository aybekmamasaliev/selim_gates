import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import s from "./SwiperAuto.module.css";
import worker from "../../media/worker.svg";
import setting from "../../media/settings.svg";
import clock from "../../media/clock.svg";
import man from "../../media/man.svg";
import hand from "../../media/hand.svg";



const SwiperAutoTwo=()=>{
    return<>
    <Swiper
       spaceBetween={20}
       slidesPerView={"auto"}
       className={s.dis_n}
       >
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={worker} alt=""/>
                <p>Бесплатный выезд специалиста для замеров</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={setting} alt=""/>
                <p>Многолетный опыт работы</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={clock} alt=""/>
                <p>Минимальные сроки производства</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={man} alt=""/>
                <p>Высокая квалификация сотрудников</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={hand} alt=""/>
                <p>Постгарантийное обслуживание и ремонт</p>
            </div>
        </SwiperSlide>
    </Swiper>
    </>
}

export default SwiperAutoTwo