/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

type ElasticSpell = {
	name: string;
	level: number;
	school: string;
	castingTime: string;
	duration: string;
	range: string;
	area: string;
	areaShape?: string;
	attack: string;
	save: string;
	damage?: string;
	effect?: string[];
	ritual?: boolean;
	concentration?: boolean;
	verbal?: boolean;
	somatic?: boolean;
	material?: string;
	source: string;
	details?: string;
};

export default ElasticSpell;
