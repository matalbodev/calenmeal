import "../styles/Button.scss";
import React, { ComponentProps } from "react";
export { Button };

type ButtonProps = {
  markup: "button" | "a";
  children: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary";
  isCenter?: boolean;
  isFull?: boolean;
} & ComponentProps<"button"> &
  ComponentProps<"a">;

function Button({ markup = "button", children, color, isFull, isCenter, ...otherProps }: ButtonProps) {
  return React.createElement(
    markup,
    {
      ...otherProps,
      className: `button button--${color} ${isFull ? "button--full" : ""} ${isCenter ? "button--center" : ""}`,
    },
    children
  );
}
