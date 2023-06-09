import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { LayoutDefault as Layout } from "#root/components/layout/LayoutDefault";
import { DayContextProvider } from "./useDayContext";

export { PageShell };

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
	return (
		<React.StrictMode>
			<DayContextProvider>
				<PageContextProvider pageContext={pageContext}>
					<Layout>{children}</Layout>
				</PageContextProvider>
			</DayContextProvider>
		</React.StrictMode>
	);
}
