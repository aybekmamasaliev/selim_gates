import React, { useEffect } from "react";
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
import { useGetCategoriesQuery, useGetCategoryAdvantagesQuery, useGetSubCategoryQuery } from "../../redux";

function GatesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: typee = [], isLoading } = useGetCategoriesQuery();

 

  const params = useParams().id;

  const {data: subCategory=[]}=useGetSubCategoryQuery(params);

  const {data: categoryAdvantages=[]}=useGetCategoryAdvantagesQuery();



  const category_advantages = typee.find((item) => item.id == params);

  let external_image;

  let filteredCategoryAdvantages = categoryAdvantages.filter(item=>item.category==params)
  
  if (isLoading) {
    external_image = x;
  } else {
    external_image = category_advantages.image;
  }

  let types_of_gates;

  types_of_gates = typee.filter(
    (item) => item.category == category_advantages.category
  );

  const types = [
    { name: "Противопожарные распашные ворота", img: gateType1 ,id:1},
    { name: "Противопожарные секционные ворота", img: gateType2 , id:2},
    { name: "Откатные  ворота", img: gateType3, id:3 },
    { name: "Скоростные рулонные  ворота", img: gateType4 , id:4},
    { name: "Распашные пленочные  ворота", img: gateType5, id:5 },
  ];

  const renderedTypes = subCategory.child_category?.map((type) => (
    <li key={type.id} className="types__item">
      <div>
        <img alt="" src={type.image} />
      </div>
      <p>{type.title}</p>
    </li>
  ));

  return (
    <div className="gatespage">
      <Header />
      <Modal />
      <section
        aria-labelledby="banner__title"
        className="banner"
        style={{ backgroundImage: `url(${external_image})` }}
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
          {isLoading ? (
            <p>loading ... </p>
          ) : (
            <p>{category_advantages.description}</p>
          )}
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
          {filteredCategoryAdvantages.map((item) => (
            <li className="main-advantages__item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <Form />
      <Footer />
    </div>
  );
}

export default GatesPage;
