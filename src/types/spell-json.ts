/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { mapNumberToSchoolName } from "../enums/schools";
import Spell from "./spell";

export type SpellJson = {
	name: string;
	level: number;
	school: number;
	castingTime?: string;
	duration?: string;
	range?: number | string;
	area?: string;
	attack?: string;
	save?: string;
	damageAndEffect?: string;
	ritual?: boolean;
	concentration?: boolean;
	verbal?: boolean;
	somatic?: boolean;
	material?: string;
	source?: string;
	details?: string;
	link?: string;
};

export const mapSpellJsonToSpell = (json: SpellJson): Spell => {
	return {
		name: json.name,
		level: json.level,
		school: mapNumberToSchoolName(json.school),
		castingTime: json.castingTime,
		duration: json.duration,
		range: json.range,
		area: json.area,
		attack: json.attack,
		save: json.save,
		damageAndEffect: json.damageAndEffect,
		ritual: json.ritual,
		concentration: json.concentration,
		verbal: json.verbal,
		somatic: json.somatic,
		material: json.material,
		source: json.source,
		details: json.details,
	};
};
