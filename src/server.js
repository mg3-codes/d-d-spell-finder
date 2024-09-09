/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import fs from "node:fs/promises";
import express from "express";
import { createServer as createViteServer } from "vite";

const isProduction = process.env.NODE_ENV === "production";
const Port = process.env.PORT || 3000;
const Base = process.env.BASE || "/";

const templateHtml = isProduction
	? await fs.readFile("./dist/client/index.html", "utf-8")
	: "";

const ssrManifest = isProduction
	? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
	: undefined;

const app = express();
let vite;

if (!isProduction) {
	vite = await createViteServer({
		server: { middlewareMode: true },
		appType: "custom",
	});

	app.use(vite.middlewares);
} else {
	const sirv = (await import("sirv")).default;
	const compression = (await import("compression")).default;
	app.use(compression());
	app.use(
		Base,
		sirv("./dist/client", {
			extensions: [],
			gzip: true,
		}),
	);
}

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api", (req, res) => {
	res.json({ message: "Hello World" });
});

app.use("*", async (req, res, next) => {
	let template, render;

	try {
		if (!isProduction) {
			template = await fs.readFile("./index.html", "utf-8");
			template = await vite.transformIndexHtml(req.originalUrl, template);
			render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
		} else {
			template = templateHtml;
			render = (await import("./dist/server/entry-server.js")).render;
		}

		const rendered = await render({ path: req.originalUrl }, ssrManifest);
		const html = template.replace(`<!--app-html-->`, rendered);

		res.status(200).setHeader("Content-Type", "text/html").end(html);
	} catch (error) {
		vite.ssrFixStacktrace(error);
		next(error);
	}
});

app.listen(Port, () => {
	console.log(`Server running on http://localhost:${Port}`);
});
