import './BackButton.scss';
import { usePageContext } from "#root/renderer/usePageContext";
import { ReactComponent as Arrow } from "#root/assets/icons/arrow.svg";
export { BackButton };

function BackButton() {
  const pageContext = usePageContext();
  const isIndex = pageContext.urlPathname.split("/").filter((n) => n)?.length <= 1;

	return !isIndex ? <button className="back-button" type="button" onClick={() => history.back()}><Arrow /></button> : null;
}
