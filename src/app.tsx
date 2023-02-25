/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import { ThemeContextProvider } from "./components/theme-context-provider";
import { ColumnContextProvider } from "./components/column-context-provider";
import { Page } from "./components/page";

import "./app.css";

const App = () => {
	return (
		<ThemeContextProvider>
			<ColumnContextProvider>
				<Page />
			</ColumnContextProvider>
		</ThemeContextProvider>
	);
};

export default App;
