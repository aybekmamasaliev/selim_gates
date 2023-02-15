import Card from '../Card/Card';
import HeadphonesSvg from './HeadphonesSvg.svg';
import RemoteSvg from './RemoteSvg.svg';
import RepairSvg from './RepairSvg.svg';
import WarrantySvg from './WarrantySvg.svg';
import styles from './Services.module.scss';

const data = [
  {
    id: 1,
    icon: HeadphonesSvg,
    text: 'Консультация и техническая поддержка',
  },
  {
    id: 2,
    icon: RemoteSvg,
    text: 'Настройка пультов управления',
  },
  {
    id: 3,
    icon: RepairSvg,
    text: 'Монтаж ',
  },
  {
    id: 4,
    icon: WarrantySvg,
    text: 'Послегарантийное обслуживание',
  },
];

function Services() {
  const renderedCards = data.map((serv) => (
    <li key={serv.id} className={styles.services__item}>
      <Card icon={serv.icon} text={serv.text} />
    </li>
  ));

  return <ul className={styles.services}>{renderedCards}</ul>;
}

export default Services;
