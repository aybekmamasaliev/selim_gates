//
import { useSwiper } from "swiper/react";
import s from "./PrevBtn.module.css";

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div className={s.circle}>
      <button className={s.btn} onClick={() => swiper.slidePrev()}>{children}</button>
    </div>
  );
};

export default SwiperButtonPrev;
