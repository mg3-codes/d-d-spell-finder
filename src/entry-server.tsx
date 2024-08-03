/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./app";

export const render = async () => {
	const html = ReactDOMServer.renderToString(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);

	return { html };
}
