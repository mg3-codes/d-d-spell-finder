/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { RowNode, ValueFormatterParams } from "ag-grid-community";
import { mapNumberToDistanceDisplayName } from "../enums/distances";
import { mapNumberToShapeDisplayName } from "../enums/shapes";
import Spell from "./spell";

export type RowArea = {
	distance: number;
	shape?: number;
};

export type TableRow = {
	name: string;
	level: number;
	school: number;
	castingTime: number;
	duration: number;
	range: number;
	area: RowArea;
	attack?: string;
	save?: string;
	damageAndEffect?: string;
	ritual?: boolean;
	concentration?: boolean;
	verbal?: boolean;
	somatic?: boolean;
	material?: string;
	source: number;
	details?: string;
};

export const buildRow = (spell: Spell): TableRow => ({
	name: spell.name,
	level: spell.level,
	school: spell.school,
	castingTime: spell.castingTime,
	duration: spell.duration,
	range: spell.range,
	area: {
		distance: spell.area,
		shape: spell.areaShape,
	},
	attack: spell.attack,
	save: spell.save,
	damageAndEffect: spell.damageAndEffect,
	ritual: spell.ritual,
	concentration: spell.concentration,
	verbal: spell.verbal,
	somatic: spell.somatic,
	material: spell.material,
	source: spell.source,
	details: spell.details,
});

export const areaValueFormatter = (
	params: ValueFormatterParams<RowArea>,
): string => {
	return `${mapNumberToDistanceDisplayName(
		params.value.distance,
	)} ${mapNumberToShapeDisplayName(params.value.shape)}`;
};