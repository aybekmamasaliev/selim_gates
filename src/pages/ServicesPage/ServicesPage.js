import React, {useEffect} from 'react';
import Header from '../../components/Header/Header';
import s from './ServicesPage.module.css';
import SectionImg from '../../components/Services_img/ServicesImg';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';

const ServicesPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={s.services}>
      <div className={s.bg_top}></div>
      <div className={s.center_bg}></div>
      <div className={s.bottom_bg}></div> 
      <Header isDark />
      <div className={s.center_x}>
        <section className={s.disg} aria-labelledby="hero__title">
          <h1 id="disg">Наши услуги</h1>
          <p>
            Наши сотрудники прошли сертифицированные тренинги в Учебных центрах
            ГК DoorHan в г. Москва, г. Алматы, г. Астаны а так же успешно сдали
            экзамены и являются обладателями сертификатов по направлениям
            «Воротные системы, ролл ставни, ролл ворота, автоматические
            системы», «Монтаж автоматики».
          </p>
          <SectionImg />
        </section>

        <section aria-labelledby="form__title" className={s.form}>
          <h2 id="form__title" className={s.form__title}>
            ОСТАЛИСЬ ВОПРОСЫ?
          </h2>
          <Form />
        </section>
       
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
