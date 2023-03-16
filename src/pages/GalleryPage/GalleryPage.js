import React, {useEffect} from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import './GalleryPage.scss';
import img1 from './gallery-image 1.png';
import img2 from './gallery-image 2.png';
import img3 from './gallery-image 3.png';
import img4 from './gallery-image 4.png';
import img5 from './gallery-image 5.png';
import img6 from './gallery-image 6.png';
import img7 from './gallery-image 7.png';
import img8 from './gallery-image 8.png';
import img9 from './gallery-image 9.png';
import img10 from './gallery-image 10.png';

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header isDark />
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
        <section className="gallery">
          <figure className="gallery__item gallery__item--1">
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
          </figure>
        </section>

        <Form />
      </main>
      <Footer />
    </>
  );
}

export default GalleryPage;
