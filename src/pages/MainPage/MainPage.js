
import React, { useEffect } from "react";
import HomeSvg from "./HomeSvg.svg";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Advantages from "../../components/Advantages/Advantages";
import OurGates from "../../components/OurGates/OurGates";
import NewsList from "../../components/News/NewsList";
import Services from "../../components/Services/Services";
import ReviewList from "../../components/ReviewList/ReviewList";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import "./MainPage.scss";
import GoTopBtn from "../../components/GoTopBtn/GoTopBtn";
import {useNavigate } from "react-router-dom";
import SliderCentered from "../../components/SliderCentered/SliderCentered";
import DefaultSlider from "../../components/BaseSlider/DefaultSlider";
import Hand from "../../components/Hand/Hand";
import SwiperAuto from "../../components/SwiperAuto/SwiperAuto";
import SwiperAutoTwo from "../../components/SwiperAutoTwo/SwiperAutoTwo";
import { useGetAboutUsQuery, useGetMainInfoQuery } from "../../redux";

function MainPage() {
  const { data: main_info = [] } = useGetMainInfoQuery();
  const { data: about_us = [] } = useGetAboutUsQuery();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Header />
      {main_info.map((item) => (
        <section className="hero" aria-labelledby="hero__title" key={item.id}>
          <h1 id="hero__title" className="hero__title">
            {item.title.split(" ").slice(0, 1)}
            <br/>
            {item.title.split(" ").slice(1,2)}&nbsp;
            {item.title.split(" ").slice(2,5)}
          </h1>
          <div className="hero__description">
            <p>{item.subtitle}</p>
          </div>
          <Button icon={HomeSvg}>заказать ворота</Button>
          <Hand />
        </section>
      ))}
      {about_us.map((item) => (
        <section aria-labelledby="about__title" className="about" key={item.id}>
          <h2 id="about__title" className="about__title title--secondary">
            {item.title}
          </h2>
          <div className="about__description">
            <p>{item.text.split(/\s+/).slice(0, 5).join(" ")}</p>
            <p>{item.text.split(/\s+/).slice(5, 15).join(" ")}</p>
            <p>{item.text.split(/\s+/).slice(15, 100).join(" ")}</p>
          </div>
        </section>
      ))}

      <section aria-labelledby="gates__title" className="gates">
        <h2 id="gates__title" className="gates__title title--secondary">
          Мы предлагаем
        </h2>
        <OurGates />
      </section>

      <section aria-labelledby="advantages__title" className="advantages">
        <h2
          id="advantages__title"
          className="advantages__title title--secondary"
        >
          Наши преимущества
        </h2>
        <Advantages />
        <SwiperAutoTwo />
      </section>

      <section aria-labelledby="news__title" className="news">
        <h2 id="news__title" className="news__title title--secondary">
          Последние новости
        </h2>
        <NewsList />
        <DefaultSlider />
        <Button isSecondary onClick={() => navigate('/news')}>
          все новости
        </Button>
      </section>

      <section aria-labelledby="works__title" className="works">
        <h2 id="works__title" className="works__title title--secondary">
          Наши работы
        </h2>
        <SliderCentered />
      </section>

      <section aria-labelledby="services__title" className="services">
        <h2 id="services__title" className="services__title title--secondary">
          Сервис
        </h2>
        <Services />
        <SwiperAuto />
      </section>
      <section
        aria-labelledby="reviews__title"
        className="reviews"
        id="reviews"
      >
        <h2 id="reviews__title" className="reviews__title title--secondary">
          Отзывы наших клиентов
        </h2>
        <ReviewList />
      </section>

      <div className="background__bottom">
        <Form />
        <GoTopBtn />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;