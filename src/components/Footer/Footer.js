
import Logo from "../Logo/Logo";
import "./Footer.scss";
import InstagramSvg from "./InstagramSvg.svg";
import WhatsAppSvg from "./WhatsAppSvg.svg";
import Map from "../Map/Map";
import { NavLink , Link} from "react-router-dom";
import { useGetNumbersQuery } from "../../redux";
import { HashLink } from 'react-router-hash-link';

function Footer() {
  const {data=[]}=useGetNumbersQuery();
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo className="footer__logo" />

        <div className="footer__schedule">
          <p>режим работы</p>
          <p>
            <span>Пн-Пт</span> <time>8:30</time>–<time>18:30</time>
          </p>
          <p>
            <span>Суббота</span>
            <time>8:30</time>–<time>14:00</time>
          </p>
        </div>

        <div className="footer__phones">
          <p>телефон</p>
          <ul>
            {
              data.map(item=>(
                <li key={item.id}>
                  <a href={"tel:" + item.number}>{item.number}</a>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="footer__map">
          <Map />
        </div>

        <div className="footer__socials">
          <p>социальные сети</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/selimtrade/">
                <span className="visually-hidden">
                  Напишите нам в инстаграме
                </span>
                <img src={InstagramSvg} alt="Instagram Logo" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+996552570755">
                <span className="visually-hidden">Напишите нам в вотсаппе</span>
                <img src={WhatsAppSvg} alt="WhatsApp Logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__nav">
          <ul>
            <li>
              <Link to="/home">Главная </Link>
            </li>

            <li>
              <HashLink to="/#about">О нас </HashLink>
            </li>

            <li>
              <Link to="/services">Услуги</Link>
            </li>

            <li>
              <Link to="/gallery">Работы </Link>
            </li>

            <li>
              <HashLink to="/#reviews">Отзывы</HashLink>
            </li>

            <li>
              <Link to="/news">Новости </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
