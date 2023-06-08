import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import { Header } from '../src/components/layout/Header'
import './global.scss'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Header />
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="layout">
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}