import Card from '../Card/Card';
import styles from './Services.module.scss';
import { useGetServicesQuery } from '../../redux';

function Services() {
  const {data=[], isLoading} = useGetServicesQuery();
  const renderedCards = data.map((serv) => (
    <li key={serv.id} className={styles.services__item}>
      <Card icon={serv.image} text={serv.text} />
    </li>
  ));

  return <ul className={styles.services}>{renderedCards}</ul>;
}

export default Services;
