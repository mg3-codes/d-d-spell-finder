/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState } from "react";

import { Table } from "./components/table";

import { SettingsOffcanvas } from "./components/settings-offcanvas";
import { Column } from "./enums/columns";
import { Theme } from "./enums/theme";
import { defaultSelectedColumns } from "./utility/table-defaults";

import "./app.css";

const App = () => {
	const [selectedColumns, setSelectedColumns] = useState<Column[]>(
		defaultSelectedColumns,
	);

	const handleThemeChange = (theme: Theme): void => alert(theme);

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
			<div className="heading">
				<h1>D&D Spell Details</h1>
				<SettingsOffcanvas
					currentTheme={Theme.Light}
					handleThemeChange={handleThemeChange}
					handleColumnChange={handleColumnChange}
					selectedColumns={selectedColumns}
				/>
			</div>
			<Table selectedColumns={selectedColumns} />
		</div>
	);
};

export default App;
