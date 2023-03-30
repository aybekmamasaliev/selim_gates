import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import "./GatesPage.scss";
import gateType1 from "./media/gateType1.avif";
import gateType2 from "./media/gateType2.avif";
import gateType3 from "./media/gateType3.avif";
import gateType4 from "./media/gateType4.avif";
import gateType5 from "./media/gateType5.avif";
import Modal from "../../components/Modal/Modal";
import x from "./media/GatesPageBg.avif";
import { useGetCategoriesQuery } from "../../redux";

function GatesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [banner, setBanner]=useState(x)

  const { data: typee = [], isLoading } = useGetCategoriesQuery();

  const params = useParams().id;

  const category_advantages = typee.find((item) => item.id == params);

  // if(isLoading){
  //   setBanner(x)
  // }else{
  //   setBanner(gateType3)
  // }



  console.log(typee);
  // console.log(category_advantages);

  const types = [
    { name: "Противопожарные распашные ворота", img: gateType1 },
    { name: "Противопожарные секционные ворота", img: gateType2 },
    { name: "Откатные  ворота", img: gateType3 },
    { name: "Скоростные рулонные  ворота", img: gateType4 },
    { name: "Распашные пленочные  ворота", img: gateType5 },
  ];

  const renderedTypes = types.map((type) => (
    <li key={type.name} className="types__item">
      <div>
        <img alt="" src={type.img} />
      </div>
      <p>{type.name}</p>
    </li>
  ));

  return (
    <div className="gatespage">
      <Header />
      <Modal />
      <section
        aria-labelledby="banner__title"
        className="banner"
        style={{ backgroundImage: `url(${category_advantages.image})`}}
      >
        {isLoading ? (
          <h1 id="banner__title" className="banner__title">
            Loading ...
          </h1>
        ) : (
          <h1 id="banner__title" className="banner__title">
            {category_advantages.title}
          </h1>
        )}
      </section>
      <section className="description" aria-labelledby="description__title">
        <h2
          id="description__title"
          className="description__title visually-hidden"
        >
          Характеристика ворот
        </h2>
        <div className="description__text">
          <p>
            {/* {category_advantages.description} */}
            {/* Промышленные секционные ворота DoorHan устанавливаются в проёмы
            производственных зданий, складских помещений, цехов, терминалов
            и прочих промышленных объектов, где они должны отвечать гораздо
            более жёстким требованиям, в отличие от гаражных ворот.
            Так как промышленные ворота эксплуатируются с высокой
            интенсивностью, для обеспечения долгосрочной работы без сбоев,
            они обладают повышенной износостойкостью за счёт применения
            специальных технологий. Используемая в воротах система уплотнителей
            обеспечивает высокую термоизоляцию — сохранение требуемого
            температурного режима является важной задачей практически для любого
            промышленного объекта. */}
          </p>
        </div>
      </section>

      <section className="types" aria-labelledby="types__title">
        <h2 id="types__title" className="types__title">
          Типы ворот
        </h2>
        <ul className="types__list">{renderedTypes}</ul>
      </section>

      <section
        className="main-advantages"
        aria-labelledby="main-advantages__title"
      >
        <h2 id="main-advantages__title" className="main-advantages__title">
          Основные преимущества
        </h2>
        <ol className="main-advantages__list">
          {category_advantages?.category_advantages?.map((item) => (
            <li className="main-advantages__item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}

          {/* <li className="main-advantages__item">
            <h3>Промышленный масштаб</h3>
            <p>
              данная серия ворот спроектирована специально для перекрытия
              больших проёмов на промышленных объектах.
            </p>
          </li>
          <li className="main-advantages__item">
            <h3>Высокий уровень термоизоляции</h3>
            <p>
              промышленные ворота isd01 применяются для термоизоляции помещений
              с высокой интенсивностью использования.
            </p>
          </li>
          <li className="main-advantages__item">
            <h3>Оптимальное решение</h3>
            <p>
              благодаря высокий эксплуатационным качествам ворота doorhan
              являются оптимальным решением для любых объектов.
            </p>
          </li>
          <li className="main-advantages__item">
            <h3>Элегантный внешний вид</h3>
            <p>
              несомтря на то, что серия предназначена для промышленного
              применения, она обладает широким выбором дизайна.
            </p>
          </li>
          <li className="main-advantages__item">
            <h3>Безопасность</h3>
            <p>
              многоуровневая система безопасности включает: устройства защиты от
              обрыва пружины и от разрыва троса, которые защищают полотно от
              непреднамеренного падения.
            </p>
          </li>
          <li className="main-advantages__item">
            <h3>Надежность</h3>
            <p>
              использование усиленных комплекутющих обеспечивает повышенную в
              конструкции в процессе эксплуатации.
            </p>
          </li> */}
        </ol>
      </section>

      <Form />
      <Footer />
    </div>
  );
}

export default GatesPage;
