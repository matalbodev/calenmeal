export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

import ReactDOM from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";

let root: ReactDOM.Root;
async function render(pageContext: PageContextClient) {
	const { Page, pageProps } = pageContext;
	const page = (
		<PageShell pageContext={pageContext}>
			<Page {...pageProps} />
		</PageShell>
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


