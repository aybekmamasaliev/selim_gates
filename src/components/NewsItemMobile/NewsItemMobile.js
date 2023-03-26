import React, { useState } from "react";
import s from "./NewsItemMobile.module.css";
import bg_img1 from "../../media/bgimg.svg";

const NewsItemMobile = (props) => {
  const [vis, setVis]=useState("visible")
  const [vis2, setVis2]=useState("hidden")


  const changeText=()=>{
    vis==="visible" ? setVis("hidden") : setVis("visible");
    vis2==="hidden" ? setVis2("visible") : setVis2("hidden");
  }
  return (
    <>
      <div className={s.news_item} onMouseEnter={changeText} onMouseLeave={changeText}>
        <img src={props.img} alt="" />
        <p className={s.news_item_title} style={{ visibility: vis }}>
          {/* РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ
          УПРАВЛЕНИЯ PCB-SH */}
          {props.url}
        </p>
        <div style={{ visibility: vis2 }}>
          <p className={s.news_desc}>
            Компания SelimTrade сообщает о возможности подключения сигнальной
            лампы к блокам управления PCB-SH. Желтая клемма стандартизирована
            для всей автоматики DoorHan и отвечает за подключение сигнальной
            лампы.
            
          </p>
          <button className={s.btn}>УЗНАТЬ БОЛЬШЕ</button>
        </div>
      </div>
    </>
  );
};

export default NewsItemMobile;
