
import Card from '../Card/Card';
import styles from './Advantages.module.scss';
import { useGetAdvantagesQuery } from '../../redux';


function Advantages() {
  const {data=[], isLoading}=useGetAdvantagesQuery();
  const renderedCards = data.map((adv) => (
    <li key={adv.id} className={styles.advantages__item}>
      <Card icon={adv.image} text={adv.text} />
    </li>
  ));

  return <ul className={styles.advantages}>{renderedCards}</ul>;
}

export default Advantages;
