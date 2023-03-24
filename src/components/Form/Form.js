import React, { useState } from "react";
import s from "./Form.module.css";
import Button from "../Button/Button";
import { useAddFeedBacksMutation } from "../../redux";
import Modal from "../Modal/Modal";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [feedback, setFeedback] = useState("");
  const [addFeedBack, { isError, error, data }] = useAddFeedBacksMutation();
  const [modal_vis, setModal_vis]=useState("hidden");
  const [valname, setValname] = useState("none");
  const [valphone, setValphone] = useState("none");
  const [valfeedback, setValfeedback] = useState("none");
  const [bordername, setBordername] = useState("0.5px solid hsl(0, 0%, 25%)");
  const [borderphone, setBorderphone] = useState("0.5px solid hsl(0, 0%, 25%)");
  const [borderfeedback, setBorderfeedback] = useState(
    "0.5px solid hsl(0, 0%, 25%)"
  );

  let dataNew = {
    name: name,
    number: phoneNumber,
    message: feedback,
  };

  const handleFeedBack = (e) => {
    e.preventDefault();

    if (name === "") {
      setValname("block");
      setBordername("0.5px solid red");
    } else {
      setValname("none");
      setBordername("0.5px solid hsl(0, 0%, 25%)");
    }

    if (phoneNumber === "") {
      setValphone("block");
      setBorderphone("0.5px solid red");
    } else {
      setValphone("none");
      setBorderphone("0.5px solid hsl(0, 0%, 25%)");
    }

    if (feedback === "") {
      setValfeedback("block");
      setBorderfeedback("0.5px solid red");
    } else {
      setValfeedback("none");
      setBorderfeedback("0.5px solid hsl(0, 0%, 25%)");
    }

    if (phoneNumber === "" || feedback === "" || name === "") {
      return;
    }

    console.log(dataNew);

    addFeedBack({ name: name, number: phoneNumber, message: feedback })
      .unwrap()
      .then((payload) => {
        setName("");
        setPhoneNumber("");
        setFeedback("");
        console.log("fullfilled", payload);
      })
      .catch((error) => {
        if (error.data.message) {
          setValfeedback("block");
          setBorderfeedback("0.5px solid red");
          console.log("MESSAGE");
        } else if (error.data.name) {
          setValname("block");
          setBordername("0.5px solid red");
          console.log("name");
        } else if (error.data.number) {
          setValphone("block");
          setBorderphone("0.5px solid red");
          console.log("number");
        }
        return;
      });
  };

  return (
    <section className={s.form} aria-labelledby="form__title" id="form">
      <h2 className={s.form__title} id="form__title">
        Остались вопросы?
      </h2>
      <form className={s.form__form}>
        <div className={s.form__name}>
          <p className={s.valid} style={{ display: valname }}>
            это поле не может быть пустым
          </p>
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
            style={{ border: bordername }}
          />
        </div>
        <div className={s.form__phone}>
          <p className={s.valid} style={{ display: valphone }}>
            не корректный номер телефона
          </p>
          <label htmlFor="phone__input" className="visually-hidden">
            Телефон
          </label>
          <input
            className={s.form__input}
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="телефон"
            style={{ border: borderphone }}
          />
        </div>
        <div className={s.form__text}>
          <p className={s.valid} style={{ display: valfeedback }}>
            это поле не может быть пустым
          </p>
          <label htmlFor="text__input" className="visually-hidden">
            Сообщение
          </label>
          <textarea
            id="text__input"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="сообщение"
            className={s.form__textarea}
            style={{ border: borderfeedback }}
          ></textarea>
        </div>
        <Button className={s.form__button} onClick={handleFeedBack}>
          оставить заявку
        </Button>
      </form>
    
    </section>
  );
};

export default Form;
