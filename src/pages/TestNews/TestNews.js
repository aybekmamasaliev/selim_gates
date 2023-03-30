import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import s from "./TestNews.module.css";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import NewsItemMobile from "../../components/NewsItemMobile/NewsItemMobile";
import { useGetNewsQuery } from "../../redux";
import Modal from "../../components/Modal/Modal";

const TestNews = () => {
  const [reload, setReload] = useState(0)
  const [limit , setLimit] = useState(6)
  const { data = [], isLoading } = useGetNewsQuery(limit, reload);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reLoad=()=>{
    setReload(reload +3)
    setLimit(limit +3)
  }

  return (
    <div style={{ outline: "1px solid green" }}>
      <Header isDark />
      <Modal/>
      <div className={s.center_x}>
        <section className={s.disg} aria-labelledby="hero__title">
          <h1 id="disg">Новости компании</h1>
          <p>
            К вашему вниманию Здесь мы собрали все актуальные новости нашей
            компании
          </p>
          {isLoading ? (
            <p>loading...</p>
          ) : (
            <div className={s.news_list}>
              {data.results?.map((item) => {
                return (
                  <div key={item.id}>
                    <NewsItemMobile
                      text={item.text}
                      img={item.image}
                      url={item.title}
                      desc={item.text}
                      id={item.id}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            marginTop: "40px",
          }}
        >
          <Button isSecondary className={s.centr} onClick={reLoad} >
            загрузить ещё
          </Button>
        </div>
        <div style={{ marginTop: "150px" }}>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestNews;
