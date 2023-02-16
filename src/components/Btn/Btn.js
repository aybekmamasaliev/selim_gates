import React from "react";
import s from "./Btn.module.css";


const Btn = (props) => {
  return (
    <>
      <button className={s.btn}>{props.children}</button>
    </>
  );
};

export default Btn;
