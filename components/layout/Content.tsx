import './Content.scss'

export { Content }

function Content({ children }: { children: React.ReactNode }) { 
  return (
    <div id="content">
      {children}
    </div>
  )
}