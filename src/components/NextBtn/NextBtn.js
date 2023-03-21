//
import { useSwiper } from "swiper/react";
import s from "./Next.module.css";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();

  return (
    <div className={s.circle}>
      <button className={s.btn} onClick={() => swiper.slideNext()}>{children}</button>
    </div>
  );
};

export default SwiperButtonNext;
