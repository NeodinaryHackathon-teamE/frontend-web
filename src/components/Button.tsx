import styles from "./Button.module.scss";

import React from "react";
import classNames from "classnames";

interface ButtonProps {
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
}: ButtonProps) => {
  const classes = classNames("button", styles[`button--${size}`], {
    [styles["button--icon"]]: iconOnly,
  });

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
