import { usePageContext } from "../../../renderer/usePageContext"
import { BackButton } from "../commons/BackButton"
import './header.scss'

export { Header }

function Header() {
  const pageContext = usePageContext()
  const className = [pageContext.urlPathname === '/' && 'is-active'].filter(Boolean).join(' ')
  return (
    <header>
      <BackButton />
			<a href="/" className={className}>
				Calenmeal
			</a>
		</header>
  );
}