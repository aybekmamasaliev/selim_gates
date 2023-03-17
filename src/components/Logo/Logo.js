import SelimLogoColored from './media/SelimLogo_colored.avif';
import SelimLogoWhite from './media/SelimLogo_white.avif';
import SelimLogoGrey from './media/SelimLogo_grey.avif';
import SelimLogoBlack from './media/SelimLogo_black.avif';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

function Logo({ color = 'colored', className = '' }) {
  let LogoSrc;

  switch (color) {
    case 'colored':
      LogoSrc = SelimLogoColored;
      break;
    case 'white':
      LogoSrc = SelimLogoWhite;
      break;
    case 'grey':
      LogoSrc = SelimLogoGrey;
      break;
    case 'black':
      LogoSrc = SelimLogoBlack;
      break;
    default:
      LogoSrc = SelimLogoColored;
  }

  return (
    <Link to={'/home'} className={`${classes.logo} ${className}`}>
      <img src={LogoSrc} alt="Selim Trade Logo - Home" />
    </Link>
  );
}

export default Logo;
