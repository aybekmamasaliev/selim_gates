import SelimLogoColored from './SelimLogo_colored.png';
import SelimLogoWhite from './SelimLogo_white.png';
import SelimLogoGrey from './SelimLogo_grey.png';
import SelimLogoBlack from './SelimLogo_black.png';
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
