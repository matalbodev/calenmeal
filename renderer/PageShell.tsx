import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalContextProvider } from "./useModalContext";
import { SnackBarProvider } from "./useSnackBarContext";
import '#root/scss/layout.scss'
export { PageShell };

const queryClient = new QueryClient();

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <SnackBarProvider>
          <ModalContextProvider>
            <PageContextProvider pageContext={pageContext}>
              {children}
            </PageContextProvider>
          </ModalContextProvider>
        </SnackBarProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
