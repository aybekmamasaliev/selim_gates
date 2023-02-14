import React from 'react';

import s from './NewsList.module.css';
import Button from '../Button/Button';
import NewsItem from '../NewsItem/NewsItem';
import Title from '../Title/Title';

const NewsList = () => {
  return (
    <>
      <div className={s.news_block}>
        {/* <p className={s.news_title}>Последние новости</p> */}
        <Title>Последние новости</Title>
        <div className={s.news_list}>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
        <Button isSecondary>Все новости</Button>
      </div>
    </>
  );
};

export default NewsList;
