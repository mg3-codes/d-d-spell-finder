/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum School {
	Abjuration = 0,
	Conjuration = 1,
	Divination = 2,
	Enchantment = 3,
	Evocation = 4,
	Illusion = 5,
	Necromancy = 6,
	Transmutation = 7,
}

export const mapNumberToSchool = (x: number): number | undefined => {
	switch (x) {
		case 0:
			return School.Abjuration;
		case 1:
			return School.Conjuration;
		case 2:
			return School.Divination;
		case 3:
			return School.Enchantment;
		case 4:
			return School.Evocation;
		case 5:
			return School.Illusion;
		case 6:
			return School.Necromancy;
		case 7:
			return School.Transmutation;
	}
};

export const mapNumberToSchoolDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "Abjuration";
		case 1:
			return "Conjuration";
		case 2:
			return "Divination";
		case 3:
			return "Enchantment";
		case 4:
			return "Evocation";
		case 5:
			return "Illusion";
		case 6:
			return "Necromancy";
		case 7:
			return "Transmutation";
	}

	return "";
};
