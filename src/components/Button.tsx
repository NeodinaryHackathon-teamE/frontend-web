import styles from "./Button.module.scss";

import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  iconOnly?: boolean;
}

const Button = ({
  children,
  size = "medium",
  disabled = false,
  iconOnly = false,
  ...props // ← 여기 추가
}: ButtonProps) => {
  const classes = classNames("button", styles[`button--${size}`], {
    [styles["button--icon"]]: iconOnly,
  });

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
