/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

type Spell = {
	name: string;
	level: number;
	school: string;
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
	source: string;
	details?: string;
};

export default Spell;
