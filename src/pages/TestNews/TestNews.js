import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import s from "./TestNews.module.css";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import NewsItemMobile from "../../components/NewsItemMobile/NewsItemMobile";
import { useGetGoodsQuery, useGetNewsQuery } from "../../redux";
import Modal from "../../components/Modal/Modal";

// const data = [
//   {
//     _id: '632e0a1d49b90eea6bfa6044',
//     price: '218',
//     img: 'https://masahiro.kg/storage/product/2021-07-04-60e16135a05f0.png',
//     description:
//       'Винегрет Свекла, огурцы маринованные, красная фасоль, картофель, квашенная капуста,  ',
//     count: '30',
//     type: 'sushi',
//     __v: 0,
//     name: ' Аригато',
//   },
//   {
//     _id: '632e0a3049b90eea6bfa6046',
//     price: '98',
//     img: 'https://masahiro.kg/storage/product/2021-07-04-60e1616f7c93d.png',
//     description: 'Булка, котлета,сыр, ',
//     count: '30',
//     type: 'sushi',
//     __v: 0,
//     name: ' Аригато',
//   },
//   {
//     _id: '632e0a4049b90eea6bfa6048',
//     price: '58',
//     img: 'https://masahiro.kg/storage/product/2021-07-04-60e162bfacbc9.png',
//     description: 'Булка, котлета,сыр, соленый огурец, лук, помидор',
//     count: '30',
//     type: 'sushi',
//     __v: 0,
//     name: ' Аригато',
//   },
//   {
//     _id: '632e0a6449b90eea6bfa604a',
//     price: '58',
//     img: 'https://masahiro.kg/storage/product/2021-07-04-60e16c6f28b9d.png',
//     description:
//       'Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
//     count: '30',
//     type: 'sushi',
//     __v: 0,
//     name: ' Аригато',
//   },
//   {
//     _id: '632e0ae949b90eea6bfa604c',
//     price: '249',
//     img: 'https://masahiro.kg/storage/product/2021-07-04-60e16cb47f3a3.png',
//     description:
//       'Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
//     count: '30',
//     type: 'sushi',
//     __v: 0,
//     name: ' Аригато',
//   },
//   {
//     _id: '632e0ae949b90eea6bfa604c',
//     price: '249',
//     img: 'https://masahiro.kg/storage/product/2021-07-04-60e16cb47f3a3.png',
//     description:
//       'Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
//     count: '30',
//     type: 'sushi',
//     __v: 0,
//     name: ' Аригато',
//   },
// ];

const TestNews = () => {
  const [reload, setReload] = useState(6)
  const [limit , setLimit] = useState(3)
  const { data = [], isLoading } = useGetNewsQuery(limit, reload);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reLoad=()=>{
    setReload(reload +4)
    setLimit(limit +3)
  }
  console.log(reload)
  console.log(reload)

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
                  <NavLink to={`/news/${item.id}`} key={item.id}>
                    <NewsItemMobile
                      img={item.image}
                      url={item.title}
                      desc={item.text}
                    />
                  </NavLink>
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
          <Button isSecondary className={s.centr} >
            загрузить ещё
          </Button>
          <p onClick={reLoad}>cnjfdncjfedncje</p>
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
