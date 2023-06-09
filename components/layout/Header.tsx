import "./Header.scss";
import { usePageContext } from "#root/renderer/usePageContext";
import { BackButton } from "../commons/BackButton";

export { Header };

function Header() {
	const pageContext = usePageContext();
	const className = [pageContext.urlPathname === "/" && "is-active"].filter(Boolean).join(" ");
	return (
		<header id="header">
			<BackButton />
			<a href="/" className={className}>
				Calenmeal
			</a>
		</header>
	);
}
