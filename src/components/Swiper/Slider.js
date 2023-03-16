import React, { useEffect, useState } from 'react';
import s from './Slider.module.css';
import SwiperButtonNext from '../NextBtn/NextBtn';
import SwiperButtonPrev from '../PrevBtn/PrevBtn';
import left from '../../media/left.svg';
import right from '../../media/right.svg';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const Slider = () => {
  // const {data=[], isLoading}=useGetGoodsQuery();
  const swiper = useSwiper();

  // const [windowwidth, setWindowWidth] = useState(window.innerWidth);

  // const setSize = () => {
  //   setWindowWidth(window.innerWidth);
  //   console.log(windowwidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", setSize);
  //   return () => {
  //     window.removeEventListener("resize", setSize);
  //   };
  // }, []);

  return (
    <div className={s.slider_cover}>
      {/* <p>{windowwidth}</p> */}

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          300: {
            initialSlide: 2,
            centeredSlides: false,
            slidesPerView: 'auto',
          },
          // 680: {
          //   centeredSlides: false,
          //   slidesPerView: 2,
          // },
          780: {
            centeredSlides: true,
            slidesPerView: 'auto',
          },
          1024: {
            centeredSlides: false,
            slidesPerView: 3,
          },
          1360: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item) => {
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
    </div>
  );
};

export default Slider;
