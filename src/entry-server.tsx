/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./app";

interface IRenderProps {
	path: string;
}

export const render = ({ path }: IRenderProps) => {
	return ReactDOMServer.renderToPipeableStream(
		<StaticRouter location={path}>
			<App />
		</StaticRouter>,
	);
};
