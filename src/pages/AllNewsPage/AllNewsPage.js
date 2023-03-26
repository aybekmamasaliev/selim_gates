import React, { useState, useEffect } from 'react';
import s from './AllNewsPage.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import NewsItem from '../../components/NewsItem/NewsItem';
import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';
import { useGetGoodsQuery, useGetNewsQuery } from '../../redux';
import Modal from '../../components/Modal/Modal';

const AllNewsPage = () => {

  const {data=[], isLoading}=useGetNewsQuery
  return (
    <div className={s.newspage}>
      <Header isDark />
      <Modal/>
      <div className={s.center_x}>
        <section className={s.disg} aria-labelledby="hero__title" >
          <h1 id="disg">Новости компании</h1>
          <p>
            К вашему вниманию Здесь мы собрали все актуальные новости нашей
            компании
          </p>
          <div className={s.section__img}>
            {isLoading ? (
              <p className={s.preloader}>Идет загрузка...</p>
            ) : (
              data.results?.map((item) => {
                return (
                  <NavLink to="/news/1">
                    <NewsItem img={item.image} url={item.title} desc={item.text} />
                  </NavLink>
                );
              })
            )}
          </div>
        </section>
        <Button isSecondary className={s.isSecondary_btn}>
          загрузить ещёcdsacdsa
        </Button>
      </div>
      <section aria-labelledby="form__title" className={s.form}>
        <h2 id="form__title" className={s.form__title}>
          ОСТАЛИСЬ ВОПРОСЫ?
        </h2>
        <Form />
      </section>
      <Footer />
    </div>
  );
};

export default AllNewsPage;
