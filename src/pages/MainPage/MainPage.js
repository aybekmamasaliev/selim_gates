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
import OurWorks from "../../components/OurWorks/OurWorks";

function MainPage() {
  return (
    <div className="homepage">
      <Header />
      <section className="hero" aria-labelledby="hero__title">
        <h1 id="hero__title" className="hero__title">
          Современная и&nbsp;надёжная&nbsp;защита
        </h1>
        <div className="hero__description">
          <p>
            Найдите идеальный вариант сами или&nbsp;предоставьте это&nbsp;нам
          </p>
        </div>
        <Button icon={HomeSvg}>заказать ворота</Button>
      </section>

      <section aria-labelledby="about__title" className="about">
        <h2 id="about__title" className="about__title title--secondary">
          Кто такие Selim trade?
        </h2>
        <div className="about__description">
          <p>Мы являемся официальным представителем DOORHAN.</p>
          <p>
            Производственно-монтажная компания Selim&nbsp;trade основана в 2003
            году.
          </p>
          <p>
            Основа нашей деятельности - это продажа и монтаж ворот, рольставней,
            шлагбаумов, рольштор, жалюзи и многое другое.
          </p>
        </div>
      </section>

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
      </section>

      <section aria-labelledby="news__title" className="news">
        <h2 id="news__title" className="news__title title--secondary">
          Последние новости
        </h2>
        <NewsList />
        <Button isSecondary>все новости</Button>
      </section>

      <section aria-labelledby="works__title" className="works">
        <h2 id="works__title" className="works__title title--secondary">
          Наши работы
        </h2>
        <OurWorks />
      </section>

      <section aria-labelledby="services__title" className="services">
        <h2 id="services__title" className="services__title title--secondary">
          Сервис
        </h2>
        <Services />
      </section>
      <section aria-labelledby="reviews__title" className="reviews">
        <h2 id="reviews__title" className="reviews__title title--secondary">
          Отзывы наших клиентов
        </h2>
        <ReviewList />
      </section>
        <div className="background__bottom">
      <section aria-labelledby="form__title" className="form">
          <h2 id="form__title" className="form__title">ОСТАЛИСЬ ВОПРОСЫ?</h2>
          <Form />
      </section>
        </div>

      <Footer />
    </div>
  );
}

export default MainPage;
