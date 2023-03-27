import React from "react";
import s from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import { useGetNewsQuery } from "../../redux";

const NewsList = () => {
  const { data = {}, isLoading } = useGetNewsQuery(3);
  return (
    <div className={s.news_block}>
      <div className={s.news_list}>
        {data.results?.map((item) => (
          <NewsItem
            text={item.text}
            img={item.image}
            url={item.title}
            desc={item.text}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
