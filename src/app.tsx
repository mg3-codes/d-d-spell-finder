/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useContext, useState } from "react";

import { Table } from "./components/table";

import { SettingsOffcanvas } from "./components/settings-offcanvas";
import { Column } from "./enums/columns";
import { defaultSelectedColumns } from "./utility/table-defaults";

import "./app.css";
import { ThemeContextProvider } from "./components/theme-context-provider";

const App = () => {
	const [selectedColumns, setSelectedColumns] = useState<Column[]>(
		defaultSelectedColumns,
	);

	const handleColumnChange = (column: Column): void => {
		if (selectedColumns.find((value) => column === value) === undefined)
			setSelectedColumns([...selectedColumns, column]);
		else
			setSelectedColumns(
				selectedColumns.filter((value) => value !== column),
			);
	};

	return (
		<div>
			<ThemeContextProvider>
				<div className="heading">
					<h1>D&D Spell Details</h1>
					<SettingsOffcanvas
						handleColumnChange={handleColumnChange}
						selectedColumns={selectedColumns}
					/>
				</div>
				<Table selectedColumns={selectedColumns} />
			</ThemeContextProvider>
		</div>
	);
};

export default App;
