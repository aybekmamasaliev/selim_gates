import { React } from "react";
import { useSwiper } from "swiper/react";

const BtnNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slideNext()}>{children}</button>
    </div>
  );
};

export default BtnNext;
