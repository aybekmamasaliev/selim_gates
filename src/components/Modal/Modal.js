import React from "react";
import s from "./Modal.module.css";
import x from "../../media/x.svg";
import galka from "../../media/galka.svg";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux";


const Modal = () => {
  const count = useSelector(state=>state.counter.value)
  const dispatch = useDispatch(decrement);
  // let vis = props.vis;
  // const changeVisibility = () => {
  //   if (vis === "visible") {
  //     vis = "hidden";
  //   }
  //   props.onClick(vis);
  // };
  return (
    <>
      <div  style={{ visibility: count}}>
        <div className={s.back_modal}>
        </div>
        <div className={s.div_modal}>
          <img src={x} alt="" className={s.close} onClick={()=>dispatch(decrement())} />
          <img src={galka} alt="" className={s.galka} />
          <p className={s.text_success}>Заявка успешно отправлена</p>
          <div className={s.vasha_zayavka}>
            <p>Ваша заявка отправлена рассмотрение.</p>
            <p>В ближайшее время с вами свяжется наш специалист</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
