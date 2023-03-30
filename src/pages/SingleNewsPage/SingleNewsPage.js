import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import table from "./SingleNewsTable.png";
import img from "./SingleNewsImg.png";
import "./SingleNews.scss";
import NewsList from "../../components/News/NewsList";
import Modal from "../../components/Modal/Modal";
import { useParams } from "react-router-dom";
import { useGetNewsQuery } from "../../redux";
import DefaultSlider from "../../components/BaseSlider/DefaultSlider";

function SingleNewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const id = useParams().id;
  let news;
  const { data = [], isLoading } = useGetNewsQuery(1000);

  if (isLoading) {
    console.log("loading...");
    news = { title: "loading ...", image: img, text: "loading..." };
  } else {
    news = data.results?.find((item) => item.id == id);
    console.log(data.results);
  }
  return (
    <div className="single-newspage">
      <Header isDark />
      <Modal />
      <section
        className="single-news__section"
        aria-labelledby="single-news__title"
      >
        <h1 id="single-news__title" className="single-news__title">
          {news.title}
        </h1>
        <figure className="single-news__img">
          <img alt="" src={news.image} />
        </figure>

        <div className="single-news__description">
          <p>{news.text}</p>

          {/* <p>
            Компания «SelimTrade» сообщает вам о расширении вариантов дизайна
            гаражных секционных ворот стандартной серии RSD01SC BIW. С 10 марта
            2016 года для заказа стали доступны ворота с дизайном панели «доска»
            в трёх цветовых решениях (RAL 9003, RAL 8014 и «золотой дуб»).
          </p> */}
        </div>
        <figure className="single-news__table">
          <img alt="" src={table} />
        </figure>
      </section>
      <section
        className="related-news__section"
        aria-labelledby="related-news__title"
      >
        <h2 className="related-news__title" id="related-news__title">
          Похожие новости
        </h2>
        <NewsList />
        <DefaultSlider/>
      </section>
      <Form />
      <Footer />
    </div>
  );
}

export default SingleNewsPage;
