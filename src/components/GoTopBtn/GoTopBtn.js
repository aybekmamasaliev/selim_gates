import React from "react";
import s from "./GoTopBtn.module.css";
import btn_top from "../../media/to_the_top_swipe.svg";

const GoTopBtn = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={s.pos_ab}>
        <img src={btn_top} alt="" className={s.btn_top} onClick={goToTop} />
    </div>
  );
};

export default GoTopBtn;
