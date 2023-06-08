import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import { LayoutDefault as Layout } from '../src/components/layout/LayoutDefault'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          {children}
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}