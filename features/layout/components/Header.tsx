import "./Header.scss";
import { usePageContext } from "#root/renderer/usePageContext";
import { BackButton } from "../commons/BackButton";

export { Header };

function Header(props: { title: string }) {
  const pageContext = usePageContext();
  const isIndex = pageContext.urlPathname === "/";
  return (
    <header id="header" className={isIndex ? "" : "has-back-button"}>
      {!isIndex && <BackButton />}
      <div className="title">{props.title}</div>
    </header>
  );
}
