import React from "react";
import s from "./ServicesImg.module.css";
import img1 from "../../media/service_page/section1.svg";
import img2 from "../../media/service_page/roll.svg";
import img3 from "../../media/service_page/section.svg";
import img4 from "../../media/service_page/rollstavki.svg";
import img5 from "../../media/service_page/raspwniye.svg";
import img6 from "../../media/service_page/avtomatika.svg";
import img7 from "../../media/service_page/wlagbaumi.svg";
import img8 from "../../media/service_page/skladniye.svg";
import img9 from "../../media/service_page/kalitki.svg";

const ServicesImg = () => {
  return (
    <div className={s.imgs_section}>
      <div>
        <p className={s.left_b}>Промышленные секционные ворота</p>
        <img src={img1} alt="" />
      </div>
      <div>
      <p className={s.left_b}>Ролл ворота</p>
        <img src={img2} alt="" />
      </div>
      <div>
      <p className={s.left_b}>Секционные ворота</p>
        <img src={img3} alt="" />
      </div>
      <div>
      <p className={s.left_b}>Промышленные секционные ворота</p>
        <img src={img4} alt="" />
      </div>
      <div>
      <p className={s.left_b}>  Автоматика и механизмы для откатных и распашных ворот</p>
        <img src={img5} alt="" />
      </div>
      <div>
      <p className={s.left_b}>Промышленные секционные ворота</p>
        <img src={img6} alt="" />
      </div>
      <div>
      <p className={s.left_b}>Промышленные секционные ворота</p>
        <img src={img7} alt="" />
      </div>
      <div>
      <p className={s.left_b}>Промышленные секционные ворота</p>
        <img src={img8} alt="" />
      </div>
      <div>
      <p className={s.left_b}>Промышленные секционные ворота</p>
        <img src={img9} alt="" />
      </div>
      <div>
      <p className={s.left_b}>Промышленные секционные ворота</p>
        <img src={img9} alt="" />
      </div>
    </div>
  );
};

export default ServicesImg;
