import { getMeal } from '#root/api/meal';
import { PageContext } from '#root/renderer/types';
import fetch from 'node-fetch'
export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
	const id = pageContext?.routeParams?.id || '';
	const response = await getMeal(id)
	const { data, errorMsg } = response
	return {
		pageContext: {
			pageProps: {
				data,
				errorMsg
			},
		},
	};
}