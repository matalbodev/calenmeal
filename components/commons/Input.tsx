import "./Input.scss";

export { Input };

type InputProps = {
	isFull?: boolean;
	inputRef?: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ isFull, inputRef, ...props }: InputProps) {
	return <input ref={inputRef}  className={`input ${isFull ? "input--full" : ""}`} {...props} />;
}
