import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import phoneSvg from './phoneSvg.svg';
import { useState } from 'react';

function Header({ isDark }) {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <>
      <header className={`${styles.header} ${styles.header__desktop}`}>
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
          <a href="#form">г.Бишкек</a>
          <a href="tel:+996-552-570-755">+996 (552) 57 07 55</a>
        </div>
      </header>
      <header className={`${styles.header} ${styles.header__mobile}`}>
        <Logo color={isDark ? 'black' : 'grey'} />
        <button onClick={() => setShowMenu(!showMenu)}>
          <svg
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.875 15.5H27.125"
              stroke={isDark ? '#414141' : '#F1F6FF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.875 7.75H27.125"
              stroke={isDark ? '#414141' : '#F1F6FF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.875 23.25H27.125"
              stroke={isDark ? '#414141' : '#F1F6FF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {showMenu && (
          <div class={styles.menu}>
            <Logo color="black" className={styles.menu__logo} />
            <nav>
              <ul>
                <li>
                  <Link to="/home" className={styles.menu__link}>
                    главная
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={styles.menu__link}>
                    услуги
                  </Link>
                </li>
                <li>
                  <Link to="/news" className={styles.menu__link}>
                    новости
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={styles.menu__link}>
                    наши работы
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.menu__contacts}>
              <a href="#form">г.Бишкек</a>
              <a href="tel:+996-552-570-755">
                <span>
                  <img src={phoneSvg} alt="" />
                </span>
                +996 (552) 57 07 55
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
