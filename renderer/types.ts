export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

import type {
  PageContextBuiltIn,
  /*
  // When using Client Routing https://vite-plugin-ssr.com/clientRouting
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
  /*/
  // When using Server Routing
  PageContextBuiltInClientWithServerRouting as PageContextBuiltInClient,
  //*/
} from "vite-plugin-ssr/types";

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  urlParsed: {
    search: {
      [key: string]: string;
    };
  };
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
  dehydratedState?: unknown;
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;



export { SnackBarState, SnackBarContext }

type SnackBarState = {
  title?: string;
  message: string;
  type?: "error" | "success";
  open: boolean;
};

type SnackBarContext = {
  snack: SnackBarState;
  addSnack: (state: SnackBarState) => void;
  removeSnack: () => void;
};
