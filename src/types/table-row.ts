/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { Distance } from "../enums/distances";
import Spell from "./spell";

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
