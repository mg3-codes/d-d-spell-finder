/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

type Spell = {
	name: string;
	level: number;
	school: number;
	castingTime: number;
	duration: number;
	range: number;
	area: number;
	areaShape?: number;
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

export default Spell;
