import { ComponentProps } from "react";
import "../styles/Input.scss";

export { Input };

type InputProps = {
	isFull?: boolean;
	inputRef?: React.Ref<HTMLInputElement>;
} & ComponentProps<'input'>;

function Input({ isFull, inputRef, ...props }: InputProps) {
	return <input ref={inputRef}  className={`input ${isFull ? "input--full" : ""}`} {...props} />;
}
