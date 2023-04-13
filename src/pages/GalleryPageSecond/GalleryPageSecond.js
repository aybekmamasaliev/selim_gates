import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import "./GalleryPageSecond.scss";
import Modal from "../../components/Modal/Modal";
import { useGetProductsQuery } from "../../redux";

function GalleryPageSecond() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: products = [] } = useGetProductsQuery();
  return (
    <>
      <Header isDark />
      <Modal />
      <main className="main">
        <div className="main__info">
          <h1 className="main__title">Наши работы</h1>
          <div className="main__description">
            <p>
              Здесь мы собрали наши лучшие проекты, чтобы вы могли вдохновиться
              идеями для собственного проекта. Вы найдете проект по душе и
              нраву, который захотите воплотить в жизнь.
            </p>
          </div>
        </div>
        <section>
          <div className="fl_wr_ap_a">
            {products.map((item) => (
              <div className="div_cover_products">
                <img alt="" src={item.image} className="product" />
              </div>
            ))}
          </div>

          {/* <figure className="gallery__item gallery__item--1">
            <img alt="" src={img1} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--2">
            <img alt="" src={img2} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--3">
            <img alt="" src={img3} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--4">
            <img alt="" src={img4} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--5">
            <img alt="" src={img5} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--6">
            <img alt="" src={img6} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--7">
            <img alt="" src={img7} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--8">
            <img alt="" src={img8} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--9">
            <img alt="" src={img9} />
          </figure>{' '}
          <figure className="gallery__item gallery__item--10">
            <img alt="" src={img10} />
          </figure> */}
        </section>

        <Form />
      </main>
      <Footer />
    </>
  );
}

export default GalleryPageSecond;
