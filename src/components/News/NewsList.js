import React from "react";
import s from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
// import { useGetNewsQuery } from "../../redux";

const NewsList = () => {
  // const { data = [], isLoading } = useGetNewsQuery();
  return (
    <>
      <div className={s.news_block}>
        <div className={s.news_list}>
          {/* {data.map((item) => (
            // <NewsItem url={item.title} desc={item.text} />
            <p>{item.title}</p>
          ))} */}
          <NewsItem url="hello world" />
          <NewsItem url="hello world" />
          <NewsItem url="hello world" />
        </div>
      </div>
    </>
  );
};

export default NewsList;
