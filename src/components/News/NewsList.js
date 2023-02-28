import React from 'react';

import s from './NewsList.module.css';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = () => {
  return (
    <>
      <div className={s.news_block}>
        <div className={s.news_list}>
          <NewsItem url="hello world"/>
          <NewsItem url="hello world" />
          <NewsItem url="hello world"/>
        </div>
      </div>
    </>
  );
};

export default NewsList;
