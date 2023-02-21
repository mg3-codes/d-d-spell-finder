/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import LevelFilter from "./components/level-filter/level-filter";
import SchoolFilter from "./components/school-filter/school-filter";
import SourceFilter from "./components/source-filter/source-filter";

import Spell from "./types/spell";
import { SpellJson, mapSpellJsonToSpell } from "./types/spell-json";

import "./app.css";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

import spellData from "./assets/5e-spells.json";

const App = () => {
	const setDefaultData = (): Spell[] => {
		return spellData.spells.map((spellJson: SpellJson) =>
			mapSpellJsonToSpell(spellJson),
		);
	};

	const gridRef = useRef(); // Optional - for accessing Grid's API
	const [rowData, setRowData] = useState<Spell[]>(setDefaultData()); // Set rowData to Array of Objects, one Object per Row

	useEffect(() => {
		const sources = spellData.spells.map((x) => x.source);
		console.log(...new Set(sources));
	}, []);

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
		{
			field: "level",
			headerName: "Level",
			filter: LevelFilter,
			initialWidth: 90,
		},
		{
			field: "school",
			headerName: "School",
			filter: SchoolFilter,
			initialWidth: 130,
		},
		{ field: "castingTime", headerName: "Casting Time", initialWidth: 110 },
		{ field: "duration", headerName: "Duration", initialWidth: 140 },
		{ field: "range", headerName: "Range", initialWidth: 100 },
		{ field: "area", headerName: "Area", initialWidth: 100 },
		{ field: "attack", headerName: "Attack", initialWidth: 100 },
		{ field: "save", headerName: "Save", initialWidth: 110 },
		{
			field: "damageAndEffect",
			headerName: "Damage/Effect",
			initialWidth: 110,
		},
		{ field: "ritual", headerName: "Ritual", initialWidth: 100 },
		{
			field: "concentration",
			headerName: "Concentration",
			initialWidth: 100,
		},
		{ field: "verbal", headerName: "Verbal", initialWidth: 100 },
		{ field: "somatic", headerName: "Somatic", initialWidth: 100 },
		{ field: "material", headerName: "Material" },
		{ field: "source", headerName: "Source", filter: SourceFilter },
		{ field: "details", headerName: "Details" },
	]);

	// defaultColDef sets props common to all Columns
	const defaultColDef = useMemo<ColDef>(
		() => ({
			filter: true,
			sortable: true,
			resizable: true,
			wrapHeaderText: true,
		}),
		[],
	);

	return (
		<div>
			<div className="app ag-theme-alpine">
				<AgGridReact
					// ref={gridRef} // Ref for accessing Grid's API
					columnDefs={columnDefs} // Column Defs for Columns
					rowData={rowData} // Row Data for Rows
					defaultColDef={defaultColDef} // Default Column Properties
					animateRows={true} // Optional - set to 'true' to have rows animate when sorted
					rowSelection="multiple" // Options - allows click selection of rows
					suppressRowClickSelection
					// onCellClicked={cellClickedListener} // Optional - registering for Grid Event
				/>
			</div>
		</div>
	);
};

export default App;
