import React from "react";
import s from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import { useGetNewsQuery } from "../../redux";

const NewsList = () => {
  const { data = {}, isLoading } = useGetNewsQuery(3);
  console.log(data.next)
  return (
      <div className={s.news_block}>
        <div className={s.news_list}>
          {data.results?.map((item) => (
            <NewsItem img={item.image} url={item.title} desc={item.text} />
          ))}
        </div>
      </div>
  );
};

export default NewsList;
