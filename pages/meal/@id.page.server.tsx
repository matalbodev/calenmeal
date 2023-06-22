import fetch from 'node-fetch'
export { onBeforeRender };

async function onBeforeRender() {
	const response = await fetch("https://fruityvice.com/api/fruit/all");
	let data;
	try {
		data = await response.json();
	} catch (error) {
		console.error(error);
	}
	return {
		pageContext: {
			pageProps: {
				data,
			},
		},
	};
}
 export { prerender };

async function prerender() {

	const response = await fetch("https://fruityvice.com/api/fruit/all");
	let data;
	try {
		data = await response.json();
	} catch (error) {
		console.error(error);
	}
	return {
		pageContext: {
			pageProps: {
				data,
			},
		},
	};
}