import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { ModalContextProvider } from "./useModalContext";
import { SnackBarProvider } from "./useSnackBarContext";
import '#root/scss/layout.scss'
export { PageShell };


function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
        <SnackBarProvider>
          <ModalContextProvider>
            <PageContextProvider pageContext={pageContext}>
              {children}
            </PageContextProvider>
          </ModalContextProvider>
        </SnackBarProvider>
    </React.StrictMode>
  );
}
