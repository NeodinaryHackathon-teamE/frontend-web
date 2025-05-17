import "./button.scss";

import React from "react";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button = ({
  children,
  size = "medium",
  disabled = false,
}: ButtonProps) => {
  const classes = classNames("button", `button--${size}`);

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
