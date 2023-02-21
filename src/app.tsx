/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import Spell from "./types/spell";

import "./app.css";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

import spellData from "./assets/5e-spells.json";

const App = () => {
	const gridRef = useRef(); // Optional - for accessing Grid's API
	const [rowData, setRowData] = useState<Spell[]>(spellData.spells); // Set rowData to Array of Objects, one Object per Row

	// Each Column Definition results in one Column.
	const [columnDefs, setColumnDefs] = useState<ColDef[]>([
		{
			field: "check",
			headerName: "",
			checkboxSelection: true,
			lockVisible: true,
			lockPosition: true,
			flex: 1,
		},
		{ field: "name", headerName: "Name" },
		{ field: "level", headerName: "Level", filter: "agNumberColumnFilter" },
		{ field: "school", headerName: "School" },
		{ field: "castingTime", headerName: "Casting Time" },
		{ field: "duration", headerName: "Duration" },
		{ field: "range", headerName: "Range" },
		{ field: "area", headerName: "Area" },
		{ field: "attack", headerName: "Attack" },
		{ field: "save", headerName: "Save" },
		{ field: "damageAndEffect", headerName: "Damage/Effect" },
		{ field: "ritual", headerName: "Ritual" },
		{ field: "concentration", headerName: "Concentration" },
		{ field: "verbal", headerName: "Verbal" },
		{ field: "somatic", headerName: "Somatic" },
		{ field: "material", headerName: "Material" },
		{ field: "source", headerName: "Source" },
		{ field: "details", headerName: "Details" },
		{ field: "link", headerName: "Link" },
		{ field: "blank", headerName: "Blank" },
	]);

	// DefaultColDef sets props common to all Columns
	const defaultColDef = useMemo<ColDef>(
		() => ({
			filter: true,
			sortable: true,
			resizable: true,
		}),
		[],
	);

	return (
		<div className="app ag-theme-alpine">
			<AgGridReact
				// ref={gridRef} // Ref for accessing Grid's API
				columnDefs={columnDefs} // Column Defs for Columns
				rowData={rowData} // Row Data for Rows
				defaultColDef={defaultColDef} // Default Column Properties
				animateRows={true} // Optional - set to 'true' to have rows animate when sorted
				rowSelection="multiple" // Options - allows click selection of rows
				// onCellClicked={cellClickedListener} // Optional - registering for Grid Event
			/>
		</div>
	);
};

export default App;
