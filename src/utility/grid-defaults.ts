/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { ColDef } from "ag-grid-community";

import AreaFilter from "../components/filters/area-filter/area-filter";
import AttackFilter from "../components/filters/attack-filter/attack-filter";
import BooleanFilter from "../components/filters/boolean-filter/boolean-filter";
import CastingTimeFilter from "../components/filters/casting-time-filter/casting-time-filter";
import DamageTypeFilter from "../components/filters/damage-type-filter/damage-type-filter";
import DurationFilter from "../components/filters/duration-filter/duration-filter";
import EffectFilter from "../components/filters/effect-filter/effect-filter";
import LevelFilter from "../components/filters/level-filter/level-filter";
import RangeFilter from "../components/filters/range-filter/range-filter";
import SavingThrowFilter from "../components/filters/saving-throw-filter/saving-throw-filter";
import SchoolFilter from "../components/filters/school-filter/school-filter";
import SourceFilter from "../components/filters/source-filter/source-filter";

import { areaValueComparator } from "./comparators";
import {
	rangeTooltipValueGetter,
	sourceTooltipValueGetter,
} from "./tooltip-value-getters";
import {
	areaValueFormatter,
	attackValueFormatter,
	booleanValueFormatter,
	castingTimeValueFormatter,
	damageTypeValueFormatter,
	durationValueFormatter,
	effectValueFormatter,
	rangeValueFormatter,
	savingThrowValueFormatter,
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
		headerCheckboxSelection: true,
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
		tooltipValueGetter: rangeTooltipValueGetter,
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
	{
		field: "attack",
		headerName: "Attack",
		filter: AttackFilter,
		valueFormatter: attackValueFormatter,
		initialWidth: 100,
	},
	{
		field: "save",
		headerName: "Save",
		filter: SavingThrowFilter,
		valueFormatter: savingThrowValueFormatter,
		initialWidth: 110,
	},
	{
		field: "damage",
		headerName: "Damage",
		filter: DamageTypeFilter,
		valueFormatter: damageTypeValueFormatter,
		initialWidth: 110,
	},
	{
		field: "effect",
		headerName: "Effect",
		filter: EffectFilter,
		valueFormatter: effectValueFormatter,
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
	{
		field: "material",
		headerName: "Material",
		tooltipField: "material",
		sortable: false,
	},
	{
		field: "source",
		headerName: "Source",
		valueFormatter: sourceValueFormatter,
		filter: SourceFilter,
		tooltipValueGetter: sourceTooltipValueGetter,
	},
	{
		field: "details",
		headerName: "Details",
		tooltipField: "details",
		sortable: false,
	},
];
