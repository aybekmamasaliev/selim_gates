
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import BtnNext from "./BtnNext";
import BtnPrev from "./BtnPrfrev";
import s from "./SliderCentered.module.css";
import left from "../../media/left_circle.svg";
import right from "../../media/right_circle.svg";
import {useGetProductsQuery } from "../../redux/goodsApi";

const SliderCentered = () => {
  const {data=[], isLoading} = useGetProductsQuery();

  return (
    <div className={s.margin100}>
      {isLoading ? (
        <p>Идет загрузка ...</p>
      ) : (
        <Swiper
          spaceBetween={22}
          slidesPerView={"auto"}
          loop={true}
          centeredSlides={true}
          className={s.swiper_cover}
          breakpoints={{
            0: {
              spaceBetween: 22,
              slidesPerView: "auto",
              loop: true,
              centeredSlides: true,
            },
            780: {
              spaceBetween: "8%",
              slidesPerView: 3,
              loop: true,
              centeredSlides: true,
            },
          }}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item._id} className={s.per_slide} >
                {({ isActive }) => (
                  <div className={s.div_upper_img}>
                    {isActive ? (
                      <div className={s.secondary}>
                        <div className={s.div_for_btn}>
                          <BtnPrev className={s.btn_prev}>
                            <img src={left} alt="" />
                          </BtnPrev>
                          <BtnNext className={s.btn_next}>
                            <img src={right} alt="" />
                          </BtnNext>
                        </div>
                        <img
                          src={item.image}
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
                        <img src={item.image} alt="" className={s.img} />
                      </div>
                      <img
                        src={item.img}
                        alt=""
                        className={s.img}
                        style={{
                          transition: 'all 0.4s ease',
                          transform: 'scale(1.3)',
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
      )
    </div>
  );
};

export default SliderCentered;
