/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

ReactDOM.hydrateRoot(
	document?.getElementById("app") as HTMLElement,
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
