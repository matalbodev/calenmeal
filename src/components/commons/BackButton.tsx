import { usePageContext } from "../../../renderer/usePageContext";
export { BackButton };

function BackButton() {
  const pageContext = usePageContext();
  const isIndex = pageContext.urlPathname === "/";
	return !isIndex ? <>go back</> : null;
}
