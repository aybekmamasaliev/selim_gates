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
import { NavLink } from "react-router-dom";
import DoorName from "../DoorName/DoorName";
import { useGetCategoriesQuery } from "../../redux";

const ServicesImg = () => {
  const { data: categories = [], isLoading } = useGetCategoriesQuery();
  return (
    <div className={s.imgs_section}>
      {isLoading ? (
        <p>loading ...</p>
      ) : (
        categories.map((item) => (
          <NavLink to={`/services/${item.id}`} key={item.id}>
            <div className={s.aspect_div}>
              <DoorName>{item.title}</DoorName>
              <img src={item.image} alt="" />
            </div>
          </NavLink>
        ))
      )}

      {/*
      
      <NavLink to="/services/1">
        <div>
          <DoorName>Промышленные секционные ворота</DoorName>
          <img src={img1} alt="" />
        </div>
      </NavLink>
      
      
      <NavLink to="/services/1">
        <div>
          <DoorName>Ролл ворота</DoorName>
          <img src={img2} alt="" />
        </div>
      </NavLink>

      <NavLink to="/services/1">
        <div>
          <DoorName>Секционные ворота</DoorName>
          <img src={img3} alt="" />
        </div>
      </NavLink>

      <NavLink to="/services/1">
        <div>
          <DoorName>Промышленные секционные ворота</DoorName>
          <img src={img4} alt="" />
        </div>
      </NavLink>

      <NavLink to="/services/1">
        <div>
          <DoorName>
            {" "}
            Автоматика и механизмы для откатных и распашных ворот
          </DoorName>
          <img src={img5} alt="" />
        </div>
      </NavLink>

      <NavLink to="/services/1">
        <div>
          <DoorName>Промышленные секционные ворота</DoorName>
          <img src={img6} alt="" />
        </div>
      </NavLink>

      <NavLink to="/services/1">
        <div>
          <DoorName>Промышленные секционные ворота</DoorName>
          <img src={img7} alt="" />
        </div>
      </NavLink>

      <NavLink to="/services/1">
        <div>
          <DoorName>Промышленные секционные ворота</DoorName>
          <img src={img8} alt="" />
        </div>
      </NavLink>

      <NavLink to="/services/1">
        <div>
          <DoorName>Промышленные секционные ворота</DoorName>
          <img src={img9} alt="" />
        </div>
      </NavLink>

      <NavLink to="/services/1">
        <div>
          <DoorName>Промышленные секционные ворота</DoorName>
          <img src={img9} alt="" />
        </div>
      </NavLink> */}
    </div>
  );
};

export default ServicesImg;
