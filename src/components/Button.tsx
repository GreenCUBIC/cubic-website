import * as React from "react";
import * as styles from "./Button.module.scss";

interface Props {
  ref: any;
  onClick?: () => void;
  href?: string;
  children: any;
  inverted?: boolean;
}

const Button = React.forwardRef((props: Props, ref: any) => {
  return (
    <a
      href={props.href}
      className={`${styles.button} ${props.inverted && styles.inverted}`}
      ref={ref}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
});

export default Button;
