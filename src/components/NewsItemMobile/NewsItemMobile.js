import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./NewsItemMobile.module.css";

const NewsItemMobile = (props) => {
  const [vis, setVis]=useState("visible")
  const [vis2, setVis2]=useState("hidden")
  const navigate = useNavigate();


  const changeText=()=>{
    vis==="visible" ? setVis("hidden") : setVis("visible");
    vis2==="hidden" ? setVis2("visible") : setVis2("hidden");
  }
  return (
    <>
      <div className={s.news_item} onMouseEnter={changeText} onMouseLeave={changeText}>
        <img src={props.img} alt="" />
        <p className={s.news_item_title} style={{ visibility: vis }}>
          {props.url}
          {props.id}
        </p>
        <div style={{ visibility: vis2 }}>
          <p className={s.news_desc}>
            {props.text}
          </p>
          <button className={s.btn} onClick={()=>navigate(`/news/${props.id}`)}>УЗНАТЬ БОЛЬШЕ</button>
        </div>
        <p>{props.id}</p>
      </div>
    </>
  );
};

export default NewsItemMobile;
