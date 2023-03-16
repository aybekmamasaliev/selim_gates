import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useEffect, useState } from 'react';
import 'swiper/css/navigation';
import { useSwiper } from 'swiper/react';
import BtnNext from './BtnNext';
import BtnPrev from './BtnPrfrev';
import s from './SliderCentered.module.css';
import left from '../../media/left_circle.svg';
import right from '../../media/right_circle.svg';
import { useGetGoodsQuery } from '../../redux/goodsApi';

const data = [
  {
    _id: '632e0a1d49b90eea6bfa6044',
    price: '218',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e16135a05f0.png',
    description:
      'Винегрет Свекла, огурцы маринованные, красная фасоль, картофель, квашенная капуста,  ',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0a3049b90eea6bfa6046',
    price: '98',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e1616f7c93d.png',
    description: 'Булка, котлета,сыр, ',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0a4049b90eea6bfa6048',
    price: '58',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e162bfacbc9.png',
    description: 'Булка, котлета,сыр, соленый огурец, лук, помидор',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0a6449b90eea6bfa604a',
    price: '58',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e16c6f28b9d.png',
    description:
      'Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0ae949b90eea6bfa604c',
    price: '249',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e16cb47f3a3.png',
    description:
      'Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
];

const SliderCentered = () => {
  // const { data = [], isLoading } = useGetGoodsQuery();
  const swiper = useSwiper();

  return (
    <div className={s.margin100}>
      (
      <Swiper
        spaceBetween={22}
        slidesPerView={'auto'}
        loop={true}
        centeredSlides={true}
        className={s.swiper_cover}
        breakpoints={{
          0: {
            spaceBetween: 22,
            slidesPerView: 'auto',
            loop: true,
            centeredSlides: true,
          },
          780: {
            spaceBetween: '8%',
            slidesPerView: 3,
            loop: true,
            centeredSlides: true,
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item._id} className={s.per_slide}>
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
