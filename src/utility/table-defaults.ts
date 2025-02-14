/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type {
	CellClassParams,
	CellClickedEvent,
	CellStyle,
	ColDef,
} from "ag-grid-community";

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
import { Column, mapColumnToDisplayName } from "../enums/columns";
import type Spell from "../types/spell";
import type { TableRow } from "../types/table-row";
import { booleanCellRenderer } from "./cell-renderers";
import { areaValueComparator } from "./comparators";
import {
	rangeTooltipValueGetter,
	sourceTooltipValueGetter,
} from "./tooltip-value-getters";
import {
	areaValueFormatter,
	attackValueFormatter,
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

export const defaultSelectedColumns: Column[] = [
	Column.Name,
	Column.Level,
	Column.CastingTime,
	Column.Duration,
	Column.Range,
	Column.Area,
	Column.Attack,
	Column.Save,
	Column.Damage,
	Column.Effect,
	Column.Material,
	Column.Source,
	Column.Details,
];

/**
 * Check if a column is hidden by default.
 * @param column - The column to check.
 * @returns True if the column is hidden, otherwise false.
 */
const defaultColumnIsHidden = (column: Column): boolean =>
	defaultSelectedColumns.find((value) => value === column) === undefined;

/**
 * Set the order of column definitions based on the desired order.
 * @param columnDefinitions - The array of column definitions.
 * @param desiredOrder - The desired order of columns.
 * @returns The ordered array of column definitions.
 */
export const setColumnDefinitionOrder = (
	columnDefinitions: ColDef[],
	desiredOrder: string[] | undefined,
): ColDef[] => {
	if (!desiredOrder) return [];
	const orderedArray: ColDef[] = [];

	for (const name of desiredOrder) {
		const def = columnDefinitions.find((x) => x.field === name);

		if (!def) continue;

		orderedArray.push(def);
	}

	return orderedArray;
};

/**
 * Get the default column definitions for the table.
 * @param onMaterialCellClicked - Callback for when the material cell is clicked.
 * @param onDetailsCellClicked - Callback for when the details cell is clicked.
 * @returns The array of default column definitions.
 */
export const getDefaultColumnDefinitions = (
	onMaterialCellClicked: (event: CellClickedEvent<Spell>) => void,
	onDetailsCellClicked: (event: CellClickedEvent<Spell>) => void,
): ColDef[] => [
	{
		field: "name",
		headerName: mapColumnToDisplayName(Column.Name),
		hide: defaultColumnIsHidden(Column.Name),
	},
	{
		field: "level",
		headerName: mapColumnToDisplayName(Column.Level),
		filter: LevelFilter,
		initialWidth: 90,
		hide: defaultColumnIsHidden(Column.Level),
	},
	{
		field: "school",
		headerName: mapColumnToDisplayName(Column.School),
		filter: SchoolFilter,
		valueFormatter: schoolValueFormatter,
		initialWidth: 130,
		hide: defaultColumnIsHidden(Column.School),
	},
	{
		field: "castingTime",
		headerName: mapColumnToDisplayName(Column.CastingTime),
		filter: CastingTimeFilter,
		valueFormatter: castingTimeValueFormatter,
		initialWidth: 140,
		hide: defaultColumnIsHidden(Column.CastingTime),
	},
	{
		field: "duration",
		headerName: mapColumnToDisplayName(Column.Duration),
		filter: DurationFilter,
		valueFormatter: durationValueFormatter,
		initialWidth: 140,
		hide: defaultColumnIsHidden(Column.Duration),
	},
	{
		field: "range",
		headerName: mapColumnToDisplayName(Column.Range),
		filter: RangeFilter,
		valueFormatter: rangeValueFormatter,
		tooltipValueGetter: rangeTooltipValueGetter,
		initialWidth: 100,
		hide: defaultColumnIsHidden(Column.Range),
	},
	{
		field: "area",
		headerName: mapColumnToDisplayName(Column.Area),
		filter: AreaFilter,
		valueFormatter: areaValueFormatter,
		comparator: areaValueComparator,
		initialWidth: 100,
	},
	{
		field: "attack",
		headerName: mapColumnToDisplayName(Column.Attack),
		filter: AttackFilter,
		valueFormatter: attackValueFormatter,
		initialWidth: 100,
		hide: defaultColumnIsHidden(Column.Attack),
	},
	{
		field: "save",
		headerName: mapColumnToDisplayName(Column.Save),
		filter: SavingThrowFilter,
		valueFormatter: savingThrowValueFormatter,
		initialWidth: 110,
		hide: defaultColumnIsHidden(Column.Save),
	},
	{
		field: "damage",
		headerName: mapColumnToDisplayName(Column.Damage),
		filter: DamageTypeFilter,
		valueFormatter: damageTypeValueFormatter,
		initialWidth: 110,
		hide: defaultColumnIsHidden(Column.Damage),
	},
	{
		field: "effect",
		headerName: mapColumnToDisplayName(Column.Effect),
		filter: EffectFilter,
		valueFormatter: effectValueFormatter,
		initialWidth: 110,
		hide: defaultColumnIsHidden(Column.Effect),
	},
	{
		field: "ritual",
		headerName: mapColumnToDisplayName(Column.Ritual),
		filter: BooleanFilter,
		filterParams: {
			spellPropertyName: "ritual",
		},
		cellRenderer: booleanCellRenderer,
		initialWidth: 100,
		hide: defaultColumnIsHidden(Column.Ritual),
	},
	{
		field: "concentration",
		headerName: mapColumnToDisplayName(Column.Concentration),
		filter: BooleanFilter,
		filterParams: {
			spellPropertyName: "concentration",
		},
		cellRenderer: booleanCellRenderer,
		initialWidth: 150,
		hide: defaultColumnIsHidden(Column.Concentration),
	},
	{
		field: "verbal",
		headerName: mapColumnToDisplayName(Column.Verbal),
		filter: BooleanFilter,
		filterParams: {
			spellPropertyName: "verbal",
		},
		cellRenderer: booleanCellRenderer,
		initialWidth: 100,
		hide: defaultColumnIsHidden(Column.Verbal),
	},
	{
		field: "somatic",
		headerName: mapColumnToDisplayName(Column.Somatic),
		filterParams: {
			spellPropertyName: "somatic",
		},
		filter: BooleanFilter,
		cellRenderer: booleanCellRenderer,
		initialWidth: 110,
		hide: defaultColumnIsHidden(Column.Somatic),
	},
	{
		field: "material",
		headerName: mapColumnToDisplayName(Column.Material),
		tooltipField: "material",
		onCellClicked: onMaterialCellClicked,
		sortable: false,
		hide: defaultColumnIsHidden(Column.Material),
		cellStyle: (params: CellClassParams<TableRow>): CellStyle | null => {
			if (params.data?.material !== "") return { cursor: "pointer" };

			return null;
		},
	},
	{
		field: "source",
		headerName: mapColumnToDisplayName(Column.Source),
		valueFormatter: sourceValueFormatter,
		filter: SourceFilter,
		tooltipValueGetter: sourceTooltipValueGetter,
		hide: defaultColumnIsHidden(Column.Source),
	},
	{
		field: "details",
		headerName: mapColumnToDisplayName(Column.Details),
		tooltipField: "details",
		onCellClicked: onDetailsCellClicked,
		sortable: false,
		hide: defaultColumnIsHidden(Column.Details),
		cellStyle: (params: CellClassParams<TableRow>): CellStyle | null => {
			if (params.data?.details) return { cursor: "pointer" };

			return null;
		},
	},
];

/**
 * Get the default selection column definition.
 * @returns The default selection column definition.
 */
export const getDefaultSelectionColumnDefinition = (): ColDef => ({
	field: "check",
	headerName: "",
	lockVisible: true,
	lockPosition: true,
	suppressMovable: true,
	pinned: "left",
	resizable: false,
	initialWidth: 50,
	filter: false,
});
