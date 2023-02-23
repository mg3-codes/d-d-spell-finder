/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

import { buildRow } from "./types/table-row";

import { defaultColDef, columnDefinition } from "./utility/grid-defaults";

import "./app.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import spellData from "./assets/5e-spells.json";
import { ColDef } from "ag-grid-community";

const App = () => {
	return (
		<div>
			<div className="app ag-theme-alpine">
				<AgGridReact
					columnDefs={columnDefinition}
					rowData={spellData.spells.map(buildRow)}
					defaultColDef={useMemo<ColDef>(() => defaultColDef, [])}
					animateRows={true}
					rowSelection="multiple"
					suppressRowClickSelection
				/>
			</div>
		</div>
	);
};

export default App;
