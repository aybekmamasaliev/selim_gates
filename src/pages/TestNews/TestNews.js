import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import s from './TestNews.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import NewsItemMobile from '../../components/NewsItemMobile/NewsItemMobile';
import { useGetGoodsQuery } from '../../redux';

const data = [
  {
    _id: '632e0a1d49b90eea6bfa6044',
    price: '218',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e16135a05f0.png',
    description:
      'Винегрет Свекла, огурцы маринованные, красная фасоль, картофель, квашенная капуста,  ',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0a3049b90eea6bfa6046',
    price: '98',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e1616f7c93d.png',
    description: 'Булка, котлета,сыр, ',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0a4049b90eea6bfa6048',
    price: '58',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e162bfacbc9.png',
    description: 'Булка, котлета,сыр, соленый огурец, лук, помидор',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0a6449b90eea6bfa604a',
    price: '58',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e16c6f28b9d.png',
    description:
      'Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0ae949b90eea6bfa604c',
    price: '249',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e16cb47f3a3.png',
    description:
      'Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
  {
    _id: '632e0ae949b90eea6bfa604c',
    price: '249',
    img: 'https://masahiro.kg/storage/product/2021-07-04-60e16cb47f3a3.png',
    description:
      'Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
    count: '30',
    type: 'sushi',
    __v: 0,
    name: ' Аригато',
  },
];

const TestNews = () => {
  // const { data = [], isLoading } = useGetGoodsQuery();
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
            {data.map((item) => {
              return (
                <NavLink to="/news/1">
                  <NewsItemMobile key={item._id} url={item.description} />
                </NavLink>
              );
            })}
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
