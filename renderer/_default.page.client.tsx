export const clientRouting = true;
export const hydrationCanBeAborted = true;

import ReactDOM from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContext, PageContextClient } from "./types";
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { DehydratedState } from "react-query";

export { render, onHydrationEnd, onPageTransitionEnd, onPageTransitionStart, onBeforeRender };

let root: ReactDOM.Root;
let dehydratedState: unknown;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 10,
      staleTime: Infinity,
      retryDelay: 2000,
    },
  },
});

async function render(pageContext: PageContextClient) {
	const { Page, pageProps } = pageContext;
	if (!dehydratedState && pageContext.dehydratedState) {
		dehydratedState = pageContext.dehydratedState;
	}

	const page = (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
          <PageShell pageContext={pageContext}>
            <Page {...pageProps} />
          </PageShell>
      </Hydrate>
    </QueryClientProvider>
  );
  const container = document.getElementById("react-root");
  if (!container) {
		throw new Error("#react-root not found");
  }
	if (pageContext.isHydration) {
		root = ReactDOM.hydrateRoot(container, page);
	} else {
		if (!root) {
			root = ReactDOM.createRoot(container);
		}
		root.render(page);
	}
}

async function onBeforeRender(pageContext: PageContext) {
  //const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  //await delay(1000);
  const { prefetchQueries } = pageContext.exports;

  if (prefetchQueries?.constructor == Object) {
		const queries: Promise<void>[] = [];
    Object.entries(prefetchQueries).forEach(([key, query]) => {
      queries.push(queryClient.prefetchQuery([key], query.fn));
    });

    await Promise.all(queries);

    dehydratedState = dehydrate(queryClient);
  }
}

function onHydrationEnd() {
	console.log("Hydration finished; page is now interactive.");
}
function onPageTransitionStart() {
	console.log("Page transition start");
	document.querySelector("body")?.classList.add("page-is-transitioning");
}
function onPageTransitionEnd() {
	console.log("Page transition end");
	document.querySelector("body")?.classList.remove("page-is-transitioning");
}


