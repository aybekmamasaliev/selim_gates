import { React } from "react";
import { useSwiper } from "swiper/react";

const BtnPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slidePrev()}>{children}</button>
    </div>
  );
};

export default BtnPrev;
