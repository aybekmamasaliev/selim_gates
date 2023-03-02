import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useEffect, useState } from "react";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import BtnNext from "./BtnNext";
import BtnPrev from "./BtnPrfrev";
import s from "./SliderCentered.module.css";
import left from "../../media/left_circle.svg";
import right from "../../media/right_circle.svg";

const SliderCentered = (props) => {
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
          spaceBetween={"8%"}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          className={s.swiper_cover}
        >
          {a.map((item) => {
            return (
              <SwiperSlide
                key={item._id}
                className={s.per_slide}
              >
                {({ isActive }) => (
                  <div className={s.next_test}>
                    {isActive ? (
                      <div className={s.secondary}>
                        <div className={s.div_for_btn} style={{zIndex:"100"}}>
                          <BtnPrev className={s.btn_prev}><img src={left} alt="" /></BtnPrev>
                          <BtnNext className={s.btn_next}><img src={right} alt=""  /></BtnNext>
                        </div>
                        <img
                          src={item.img}
                          alt=""
                          className={s.img}
                          style={{
                            transition: "all 0.4s ease",
                            transform: "scale(1.3)",
                          }}
                        />
                      </div>
                    ) : (
                      <div className={s.secondary}>
                        <img src={item.img} alt="" className={s.img} />
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default SliderCentered;
