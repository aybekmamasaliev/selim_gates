import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import s from "./SwiperAuto.module.css";
import operator from "../../media/operator.svg"

const SwiperAuto=()=>{
    return<>
    <Swiper
       spaceBetween={20}
       slidesPerView={"auto"}
       className={s.dis_n}
       >
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={s.per_slide}>
            <div className={s.card}>
                <img src={operator} alt=""/>
                <p>Консультация и техническая поддержка</p>
            </div>
        </SwiperSlide>
        
    </Swiper>
    </>
}

export default SwiperAuto