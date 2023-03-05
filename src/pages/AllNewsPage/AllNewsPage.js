import React, { useState, useEffect } from 'react';
import s from './AllNewsPage.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import NewsItem from '../../components/NewsItem/NewsItem';
import Button from '../../components/Button/Button';
import { NavLink } from 'react-router-dom';

const AllNewsPage = () => {
  const [a, setA] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch('https://sms-h9zb.onrender.com/user')
      .then((res) => {
        setIsloading(true);
        return res.json();
      })
      .then((data) => setA(data))
      .finally(() => setIsloading(false));
  }, []);
  return (
    <div className={s.newspage}>
      <Header isDark />
      <div>
        <section className={s.disg} aria-labelledby="hero__title">
          <h1 id="disg">Новости компании</h1>
          <p>
            К вашему вниманию Здесь мы собрали все актуальные новости нашей
            компании
          </p>
          <div className={s.section__img}>
            {isloading ? (
              <p>loading...</p>
            ) : (
              a.map((item) => {
                return (
                  <NavLink to="/news/1">
                    <NewsItem key={item._id} url={item.description} />
                  </NavLink>
                );
              })
            )}
          </div>
        </section>
        <Button isSecondary className={s.isSecondary_btn}>
          загрузить ещё
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
