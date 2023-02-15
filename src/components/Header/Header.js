import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import phoneSvg from './phoneSvg.svg';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <header className={styles.header}>
      <Logo color="white" />
      <nav>
        <ul>
          <li>
            <Link
              to="/home"
              className={`${styles.nav__link} ${isActive('/home')}`}
            >
              главная
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${styles.nav__link} ${isActive('/services')}`}
            >
              услуги
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={`${styles.nav__link} ${isActive('/news')}`}
            >
              новости
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`${styles.nav__link} ${isActive('/gallery')}`}
            >
              наши работы
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.contacts}>
        <p>г.Бишкек</p>
        <a href="tel:+996-552-570-755">
          <span>
            <img src={phoneSvg} alt="" />
          </span>
          +996 (552) 57 07 55
        </a>
      </div>
    </header>
  );
}

export default Header;
