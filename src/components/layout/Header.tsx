import { usePageContext } from "../../../renderer/usePageContext"

export { Header }

function Header() {
  const pageContext = usePageContext()
  const className = [pageContext.urlPathname === '/' && 'is-active'].filter(Boolean).join(' ')
  return <a href="/" className={className}>Calenmeal</a>
}