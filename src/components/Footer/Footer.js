import Logo from "../Logo/Logo";
import "./Footer.scss";
import InstagramSvg from "./InstagramSvg.svg";
import WhatsAppSvg from "./WhatsAppSvg.svg";
import Map from "../Map/Map";
import { Link } from "react-router-dom";
import {
  useGetNumbersQuery,
  useGetScheduleQuery,
  useGetSocialMediaQuery,
} from "../../redux";
import { HashLink } from "react-router-hash-link";

function Footer() {
  const { data: numbers = [] } = useGetNumbersQuery();
  const { data: schedule = [] } = useGetScheduleQuery();
  const { data: social_m = [] } = useGetSocialMediaQuery();
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo className="footer__logo" />

        <div className="footer__schedule">
          <p>режим работы</p>
          {schedule.map((item) => (
            <p key={item.id}>
              <span> {item.day} </span>
              <time> {item.start_time.slice(0 ,-3)} </time>-<time>{item.end_time.slice(0 ,-3)}</time>
            </p>
          ))}
        </div>
        <div className="footer__phones">
          <p>телефон</p>
          <ul>
            {numbers.map((item) => (
              <li key={item.id}>
                <a href={"tel:" + item.number}>{item.number}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__map">
          <Map />
        </div>
        <div className="footer__socials">
          <p>социальные сети</p>
          {social_m.map((item) => (
            <ul key={item.id}>
              <li>
                <a href={item.instagram}>
                  <span className="visually-hidden">
                    Напишите нам в инстаграме
                  </span>
                  <img src={InstagramSvg} alt="Instagram Logo" />
                </a>
              </li>
              <li>
                <a href={item.whatsapp}>
                  <span className="visually-hidden">
                    Напишите нам в вотсаппе
                  </span>
                  <img src={WhatsAppSvg} alt="WhatsApp Logo" />
                </a>
              </li>
            </ul>
          ))}
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
