/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type { Distance } from "../enums/distances";
import type Spell from "./spell";

export type RowArea = {
	distance: Distance;
	shape?: number;
};

export type TableRow = {
	[index: string]: string | number | number[] | boolean | RowArea | undefined;
	name: string;
	level: number;
	school: number;
	castingTime: number;
	duration: number;
	range: number;
	area: RowArea;
	attack: number;
	save: number;
	damage?: number;
	effect?: number[];
	ritual?: boolean;
	concentration?: boolean;
	verbal?: boolean;
	somatic?: boolean;
	material?: string;
	source: number;
	details?: string;
};

/**
 * Build a table row from a spell object.
 * @param spell - The spell object.
 * @returns The table row object.
 */
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
	damage: spell.damage,
	effect: spell.effect,
	ritual: spell.ritual,
	concentration: spell.concentration,
	verbal: spell.verbal,
	somatic: spell.somatic,
	material: spell.material,
	source: spell.source,
	details: spell.details,
});
