import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import s from "./TestNews.module.css";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import NewsItemMobile from "../../components/NewsItemMobile/NewsItemMobile";

const TestNews = () => {
  const [a, setA] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    fetch("https://sms-h9zb.onrender.com/user")
      .then((res) => {
        setIsloading(true);
        return res.json();
      })
      .then((data) => setA(data))
      .finally(() => setIsloading(false));
  }, []);

  return (
    <div style={{outline:"1px solid green", }}>
      <Header isDark/>
      <div className={s.center_x}>
        <section className={s.disg} aria-labelledby="hero__title">
          <h1 id="disg">Новости компании</h1>
          <p>
            К вашему вниманию Здесь мы собрали все актуальные новости нашей
            компании
          </p>
          <div className={s.news_list}>
            {isloading ? (
              <p>loading ... </p>
            ) : (
              a.map((item) => {
                return (
                  <NavLink to="/news/1">
                    <NewsItemMobile key={item._id} url={item.description} />
                  </NavLink>
                );
              })
            )}
          </div>
        </section>
        <div>
          <Button isSecondary className={s.centr}>
          загрузить ещё
          </Button>
        </div>
        <section aria-labelledby="form__title" className={s.form}>
          <h2 id="form__title" className={s.form__title}>
            ОСТАЛИСЬ ВОПРОСЫ?
          </h2>
          <Form/>
        </section>
        <Footer/>
      </div>
    </div>
  );
};

export default TestNews;
