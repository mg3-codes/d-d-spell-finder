/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import { Table } from "./components/table";
import { SettingsOffcanvas } from "./components/settings-offcanvas";
import { ThemeContextProvider } from "./components/theme-context-provider";
import { ColumnContextProvider } from "./components/column-context-provider";

import "./app.css";

const App = () => {
	return (
		<div>
			<ThemeContextProvider>
				<ColumnContextProvider>
					<div className="heading">
						<h1>D&D Spell Details</h1>
						<SettingsOffcanvas />
					</div>
					<Table />
				</ColumnContextProvider>
			</ThemeContextProvider>
		</div>
	);
};

export default App;
