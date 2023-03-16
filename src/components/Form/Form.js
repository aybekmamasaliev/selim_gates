import React, { useState } from 'react';
import s from './Form.module.css';
import Modal from '../Modal/Modal';
import btn_top from '../../media/to_the_top_swipe.svg';
import Button from '../Button/Button';

const Form = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <section className={s.form} aria-labelledby="form__title">
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
            placeholder="сообщение"
            className={s.form__textarea}
          ></textarea>
        </p>
        <Button className={s.form__button}>оставить заявку</Button>
      </form>
    </section>
  );
};

export default Form;
