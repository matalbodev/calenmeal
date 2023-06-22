import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { QueryClient, QueryClientProvider } from "react-query";
import { LayoutDefault as Layout } from "#root/components/layout/LayoutDefault";
import { DayContextProvider } from "./useDayContext";
import { ModalContextProvider } from "./useModalContext";

export { PageShell };

const queryClient = new QueryClient();

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <DayContextProvider>
            <PageContextProvider pageContext={pageContext}>
              <Layout>{children}</Layout>
            </PageContextProvider>
          </DayContextProvider>
        </ModalContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
