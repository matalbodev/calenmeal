import compress from "@fastify/compress";
import middie from "@fastify/middie";
import fastifyStatic from "@fastify/static";
import fastify from "fastify";
import path from "path";
import { renderPage } from "vite-plugin-ssr/server";
import { root } from "./root.js";
import { createServer as createViteServer } from "vite";
import fs from 'fs'
const isProduction = process.env.NODE_ENV === "production";


startServer();

async function startServer() {
	const app = fastify({
    https: {
      key: fs.readFileSync("./server/ssl/server.key"),
      cert: fs.readFileSync("./server/ssl/server.crt"),
    },
  });

	await app.register(middie);
	await app.register(compress);

	if (isProduction) {
		const distPath = path.join(root, "/dist/client/assets");
		app.register(fastifyStatic, {
			root: distPath,
			prefix: "/assets/",
		});
  } else {
		const viteServer = await createViteServer({
      root,
      server: {
        middlewareMode: true,
        https: {
          key: fs.readFileSync("./server/ssl/server.key"),
          cert: fs.readFileSync("./server/ssl/server.crt"),
        },
      },
    });
		await app.use(viteServer.middlewares);
	}

	app.get("*", async (req, reply) => {
		const pageContextInit = {
			urlOriginal: req.url,
		};
		const pageContext = await renderPage(pageContextInit);
		const { httpResponse } = pageContext;

		if (!httpResponse) {
			return reply.code(404).type("text/html").send("Not Found");
		}

		const { body, statusCode, contentType } = httpResponse;

		return reply.status(statusCode).type(contentType).send(body);
	});

	const port: number = process.env.PORT ? +process.env.PORT : 3000;

	app.listen({ port });

	console.log(`Server running at https://localhost:${port}`);
}
