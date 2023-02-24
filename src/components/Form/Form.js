import React, { useState } from "react";
import s from "./Form.module.css";
import Modal from "../Modal/Modal";
import btn_top from "../../media/to_the_top_swipe.svg";
import Button from "../Button/Button";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [vis, setVis] = useState("hidden");

  const changeVis = (e) => {
    e.preventDefault();
    vis === "hidden" ? setVis("visible") : setVis("hidden");
  };

  const fixVis = (x) => {
    setVis(x);
  };


  return (
    <div className={s.form_block}>
      <div className={s.form_border}>
        <Modal vis={vis} onClick={fixVis} />
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
            <Button onClick={changeVis} className={s.btn}>
              Оставить заявку
            </Button>
          </div>

          <div>
            <textarea placeholder="СООБЩЕНИЕ" className={s.textarea}></textarea>
          </div>
          <Button className={s.btn} style={{ display: "none" }}>
            Оставить заявку
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
