/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { ColDef } from "ag-grid-community";

import AreaFilter from "../components/area-filter/area-filter";
import BooleanFilter from "../components/boolean-filter/boolean-filter";
import CastingTimeFilter from "../components/casting-time-filter/casting-time-filter";
import DurationFilter from "../components/duration-filter/duration-filter";
import LevelFilter from "../components/level-filter/level-filter";
import RangeFilter from "../components/range-filter/range-filter";
import SchoolFilter from "../components/school-filter/school-filter";
import SourceFilter from "../components/source-filter/source-filter";

import { areaValueComparator } from "./comparators";
import {
	areaValueFormatter,
	booleanValueFormatter,
	castingTimeValueFormatter,
	durationValueFormatter,
	rangeValueFormatter,
	schoolValueFormatter,
	sourceValueFormatter,
} from "./value-formatters";

export const defaultColDef: ColDef = {
	filter: true,
	sortable: true,
	resizable: true,
	wrapHeaderText: true,
};

export const columnDefinition: ColDef[] = [
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
		valueFormatter: schoolValueFormatter,
		initialWidth: 130,
	},
	{
		field: "castingTime",
		headerName: "Casting Time",
		filter: CastingTimeFilter,
		valueFormatter: castingTimeValueFormatter,
		initialWidth: 110,
	},
	{
		field: "duration",
		headerName: "Duration",
		filter: DurationFilter,
		valueFormatter: durationValueFormatter,
		initialWidth: 140,
	},
	{
		field: "range",
		headerName: "Range",
		filter: RangeFilter,
		valueFormatter: rangeValueFormatter,
		initialWidth: 100,
	},
	{
		field: "area",
		headerName: "Area",
		filter: AreaFilter,
		valueFormatter: areaValueFormatter,
		comparator: areaValueComparator,
		initialWidth: 100,
	},
	{ field: "attack", headerName: "Attack", initialWidth: 100 },
	{ field: "save", headerName: "Save", initialWidth: 110 },
	{
		field: "damageAndEffect",
		headerName: "Damage/Effect",
		initialWidth: 110,
	},
	{
		field: "ritual",
		headerName: "Ritual",
		filter: BooleanFilter,
		filterParams: {
			spellPropertyName: "ritual",
		},
		valueFormatter: booleanValueFormatter,
		initialWidth: 100,
	},
	{
		field: "concentration",
		headerName: "Concentration",
		filter: BooleanFilter,
		filterParams: {
			spellPropertyName: "concentration",
		},
		valueFormatter: booleanValueFormatter,
		initialWidth: 100,
	},
	{
		field: "verbal",
		headerName: "Verbal",
		filter: BooleanFilter,
		filterParams: {
			spellPropertyName: "verbal",
		},
		valueFormatter: booleanValueFormatter,
		initialWidth: 100,
	},
	{
		field: "somatic",
		headerName: "Somatic",
		filterParams: {
			spellPropertyName: "somatic",
		},
		filter: BooleanFilter,
		valueFormatter: booleanValueFormatter,
		initialWidth: 100,
	},
	{ field: "material", headerName: "Material" },
	{
		field: "source",
		headerName: "Source",
		valueFormatter: sourceValueFormatter,
		filter: SourceFilter,
	},
	{ field: "details", headerName: "Details" },
];
