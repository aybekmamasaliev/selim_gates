import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import s from './TestNews.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import NewsItemMobile from '../../components/NewsItemMobile/NewsItemMobile';
import { useGetGoodsQuery } from '../../redux';

const TestNews = () => {
  const { data = [], isLoading } = useGetGoodsQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ outline: '1px solid green' }}>
      <Header isDark />
      <div className={s.center_x}>
        <section className={s.disg} aria-labelledby="hero__title">
          <h1 id="disg">Новости компании</h1>
          <p>
            К вашему вниманию Здесь мы собрали все актуальные новости нашей
            компании
          </p>
          <div className={s.news_list}>
            {isLoading ? (
              <p className={s.preloader}>Идет загрузка ...</p>
            ) : (
              data.map((item) => {
                return (
                  <NavLink to="/news/1">
                    <NewsItemMobile key={item._id} url={item.description} />
                  </NavLink>
                );
              })
            )}
          </div>
        </section>

        <Button isSecondary className={s.centr}>
          загрузить ещё
        </Button>

        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default TestNews;
