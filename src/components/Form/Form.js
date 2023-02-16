
import React, { useState } from "react";
import s from "./Form.module.css";
import Modal from "../Modal/Modal";
import btn_top from "../../media/to_the_top_swipe.svg"


const Form = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [vis, setVis] = useState('hidden');

  const changeVis = (e) => {
    e.preventDefault();
    vis === 'hidden' ? setVis('visible') : setVis('hidden');
  };

  const fixVis = (x) => {
    setVis(x);
  };

  const goToTop=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <div className={s.form_block}>
      <img src={btn_top} alt="" className={s.btn_top} onClick={goToTop}/>
      <div className={s.form_border}>
        <Modal vis={vis} onClick={fixVis} />
        <p className={s.any_questions}>Остались вопросы?</p>
        <form>
          <div className={s.form}>
            <div>
              <input
                className={s.name_input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="имя"
              />
            </div>
            <div>
              <input
                className={s.phone_num_input}
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="телефон"
              />
            </div>
            <button className={s.btn} onClick={changeVis}>
              Оставить заявку
            </button>

          </div>

          <div>
            <textarea placeholder="СООБЩЕНИЕ" className={s.textarea}></textarea>
          </div>
          <button className={s.btn} style={{ display: "none" }}>
            Оставить заявку
          </button>
        </form>
      </div>

    </div>
  );
};

export default Form;
