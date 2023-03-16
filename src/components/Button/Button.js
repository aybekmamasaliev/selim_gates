import styles from './Button.module.scss';

function Button({ icon, children, isSecondary, tag, ...rest }) {
  const Tag = tag || 'button';

  const classes = `${styles.button} ${rest.className || ''} ${
    isSecondary ? styles['button--secondary'] : ''
  }`.trim();

  return (
    <Tag {...rest} className={classes}>
      {icon && (
        <span>
          <img src={icon} alt="" />
        </span>
      )}
      {children}
    </Tag>
  );
}

export default Button;
