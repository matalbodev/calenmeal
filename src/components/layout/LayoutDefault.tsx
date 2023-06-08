import { Header } from "./Header"
import '../../scss/layout.scss'

export { LayoutDefault }

function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout">
      <Header />
      {children}
    </div>
  )
}