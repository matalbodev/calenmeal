import { getMeal } from '#root/features/meals/api';
import { PageContext } from '#root/renderer/types';
export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
	const id = pageContext?.routeParams?.id || '';
	const response = await getMeal(id)
	return {
		pageContext: {
			pageProps: {
				data: response
			},
		},
	};
}