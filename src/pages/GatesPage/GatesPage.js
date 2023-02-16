import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import './GatesPage.scss';
import gateType1 from './gateType1.png';
import gateType2 from './gateType2.png';
import gateType3 from './gateType3.png';
import gateType4 from './gateType4.png';
import gateType5 from './gateType5.png';

function GatesPage() {
  const types = [
    { name: 'Противопожарные распашные ворота', img: gateType1 },
    { name: 'Противопожарные секционные ворота', img: gateType2 },
    { name: 'Откатные  ворота', img: gateType3 },
    { name: 'Скоростные рулонные  ворота', img: gateType4 },
    { name: 'Распашные пленочные  ворота', img: gateType5 },
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
    <div>
      <Header />
      <section aria-labelledby="banner__title" className="banner">
        <h1 id="banner__title" className="banner__title">
          Промышленные секционные ворота
        </h1>
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
            Промышленные секционные ворота DoorHan устанавливаются в проёмы
            производственных зданий, складских помещений, цехов, терминалов
            и прочих промышленных объектов, где они должны отвечать гораздо
            более жёстким требованиям, в отличие от гаражных ворот.
            Так как промышленные ворота эксплуатируются с высокой
            интенсивностью, для обеспечения долгосрочной работы без сбоев,
            они обладают повышенной износостойкостью за счёт применения
            специальных технологий. Используемая в воротах система уплотнителей
            обеспечивает высокую термоизоляцию — сохранение требуемого
            температурного режима является важной задачей практически для любого
            промышленного объекта.
          </p>
        </div>
      </section>

      <section className="types" aria-labelledby="types__title">
        <h2 id="types__title" className="types__title">
          Типы ворот
        </h2>
        <ul className="types__list">{renderedTypes}</ul>
      </section>

      <Form />
      <Footer />
    </div>
  );
}

export default GatesPage;
