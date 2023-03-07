//
import { useSwiper } from "swiper/react";
import s from "./PrevBtn.module.css";

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div>
      <button className={s.btn} onClick={() => swiper.slidePrev()}>{children}</button>
    </div>
  );
};

export default SwiperButtonPrev;
