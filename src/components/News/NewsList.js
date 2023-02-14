import React from "react";
// import Btn from "../Btn/Btn";
import s from "./NewsList.module.css";
import Btn from "../Btn/Btn";
import NewsItem from "../NewsItem/NewsItem";
import Title from "../Title/Title"

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
        <Btn children={"ВСЕ НОВОСТИ"}/>
      </div>
    </>
  );
};

export default NewsList;
