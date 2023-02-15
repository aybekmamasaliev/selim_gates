import ClocksSvg from './ClocksSvg.svg';
import MechanismSvg from './MechanismSvg.svg';
import PersonSvg from './PersonSvg.svg';
import RepairSvg from './RepairSvg.svg';
import WorkerSvg from './WorkerSvg.svg';
import Card from '../Card/Card';
import styles from './Advantages.module.scss';

const data = [
  {
    id: 1,
    icon: WorkerSvg,
    text: 'Бесплатный выезд специалиста для замеров',
  },
  {
    id: 2,
    icon: MechanismSvg,
    text: 'Многолетный опыт работы',
  },
  {
    id: 3,
    icon: ClocksSvg,
    text: 'Минимальные сроки производства',
  },
  {
    id: 4,
    icon: PersonSvg,
    text: 'Высокая квалификация сотрудников',
  },
  {
    id: 5,
    icon: RepairSvg,
    text: 'Постгарантийное обслуживание и ремонт',
  },
];

function Advantages() {
  const renderedCards = data.map((adv) => (
    <li key={adv.id} className={styles.advantages__item}>
      <Card icon={adv.icon} text={adv.text} />
    </li>
  ));

  return <ul className={styles.advantages}>{renderedCards}</ul>;
}

export default Advantages;
