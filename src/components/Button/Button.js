import styles from './Button.module.scss';

function Button({ icon, children, isSecondary, ...rest }) {
  const classes = `${styles.button} ${rest.className || ''} ${
    isSecondary ? styles['button--secondary'] : ''
  }`.trim();

  return (
    <button {...rest} className={classes}>
      {icon && (
        <span>
          <img src={icon} alt="" />
        </span>
      )}
      {children}
    </button>
  );
}

export default Button;
