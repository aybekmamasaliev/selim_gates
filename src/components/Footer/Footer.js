import Logo from '../Logo/Logo';
import './Footer.scss';
import InstagramSvg from './InstagramSvg.svg';
import WhatsAppSvg from './WhatsAppSvg.svg';
import Map from '../Map/Map';

function Footer() {
  return (
    <footer className="footer">
      <Logo className="footer__logo" />

      <div className="footer__socials">
        <p>социальные сети</p>
        <ul>
          <li>
            <button>
              <img src={InstagramSvg} alt="Instagram Logo" />
            </button>
          </li>
          <li>
            <button>
              <img src={WhatsAppSvg} alt="WhatsApp Logo" />
            </button>
          </li>
        </ul>
      </div>

      <nav className="footer__nav">
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Работы</li>
          <li>Отзывы</li>
          <li>Новости</li>
        </ul>
      </nav>

      <div className="footer__schedule">
        <p>режим работы</p>
        <p>
          <span>Пн-Пт</span> <time>8:30</time>–<time>18:30</time>
        </p>
        <p>
          <span>Суббота</span> <time>8:30</time>–<time>14:00</time>
        </p>
      </div>

      <div className="footer__phones">
        <p>телефон</p>
        <ul>
          <li>
            <a href="tel:+996-552-570-755">+996 (552) 57 07 55</a>
          </li>
          <li>
            <a href="tel:+996-500-888-051">+996 (500) 88 80 51</a>
          </li>
          <li>
            <a href="tel:+996-772-327-676">+996 (772) 32 76 76</a>
          </li>
        </ul>
      </div>

      <div className="footer__map">
        <Map />
      </div>
    </footer>
  );
}

export default Footer;
