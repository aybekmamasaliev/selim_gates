import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import table from './SingleNewsTable.png';
import img from './SingleNewsImg.png';
import './SingleNews.scss';
import NewsList from '../../components/News/NewsList';

function SingleNewsPage() {
  return (
    <>
      <Header />
      <section
        className="single-news__section"
        aria-labelledby="single-news__title"
      >
        <h1 id="single-news__title" className="single-news__title">
          Расширение дизайна ворот стандартной серии RSD01SC BIW
        </h1>
        <figure className="single-news__img">
          <img alt="" src={img} />
        </figure>

        <div className="single-news__description">
          <p>
            Компания «SelimTrade» сообщает вам о расширении вариантов дизайна
            гаражных секционных ворот стандартной серии RSD01SC BIW. С 10 марта
            2016 года для заказа стали доступны ворота с дизайном панели «доска»
            в трёх цветовых решениях (RAL 9003, RAL 8014 и «золотой дуб»).
          </p>
          <figure>
            <img alt="" src={table} />
          </figure>
        </div>
      </section>
      <section
        className="related-news__section"
        aria-labelledby="related-news__title"
      >
        <h2 className="related-news__title" id="related-news__title">
          Похожие новости
        </h2>
        <NewsList />
      </section>
      <Form />
      <Footer />
    </>
  );
}

export default SingleNewsPage;
