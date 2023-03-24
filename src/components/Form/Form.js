import React, { useState } from "react";
import s from "./Form.module.css";
import Button from "../Button/Button";
import { useAddFeedBacksMutation } from "../../redux";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const [addFeedBack , {isError, error }] = useAddFeedBacksMutation();

  let dataNew = {
    name: name,
    number: phoneNumber,
    message: feedback,
  };

  const handleFeedBack = async (e) => {
    e.preventDefault();
    console.log(dataNew);
    // if(isError){
    //   console.log("no")
    //   alert("no")
    //   return
    // }
    await addFeedBack({ name: name, number: phoneNumber, message: feedback })
      .unwrap()
      .then(() => {
        setName("");
        setPhoneNumber("");
        setFeedback("");
      });
      if (isError) {
        // return <div>Error: {error.status}</div>;
        alert(error.status)
      }
  };

 

  return (
    <section className={s.form} aria-labelledby="form__title" id="form">
      <h2 className={s.form__title} id="form__title">
        Остались вопросы?
      </h2>

      <form className={s.form__form}>
        <p className={s.form__name}>
          <label htmlFor="name__input" className="visually-hidden">
            Имя
          </label>
          <input
            id="name__input"
            className={s.form__input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="имя"
          />
        </p>
        <p className={s.form__phone}>
          <label htmlFor="phone__input" className="visually-hidden">
            Телефон
          </label>
          <input
            className={s.form__input}
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="телефон"
          />
        </p>
        <p className={s.form__text}>
          <label htmlFor="text__input" className="visually-hidden">
            Сообщение
          </label>
          <textarea
            id="text__input"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="сообщение"
            className={s.form__textarea}
          ></textarea>
        </p>
        <Button className={s.form__button} onClick={handleFeedBack}>
          оставить заявку
        </Button>
      </form>
    </section>
  );
};

export default Form;
