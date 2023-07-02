import '#root/scss/layout.scss'
import { Header } from "./Header"

export { LayoutDefault }

function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout">
      {children}
    </div>
  )
}