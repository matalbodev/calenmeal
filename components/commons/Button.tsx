import React from "react";
import "./Button.scss";
export { Button };

type ButtonProps = {
	markup: 'button' | 'a';
	children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Button({ markup = 'button', children, color, ...otherProps }: ButtonProps){

  return React.createElement(markup, {
    ...otherProps,
    className: `button button--${color}`,
  }, children);
}
