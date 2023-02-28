/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum SavingThrow {
	None = 0,
	Charisma = 1,
	Constitution = 2,
	Dexterity = 3,
	Intelligence = 4,
	Strength = 5,
	Wisdom = 6,
}

export const mapNumberToSavingThrow = (x: number): SavingThrow | undefined => {
	switch (x) {
		case 0:
			return SavingThrow.None;
		case 1:
			return SavingThrow.Charisma;
		case 2:
			return SavingThrow.Constitution;
		case 3:
			return SavingThrow.Dexterity;
		case 4:
			return SavingThrow.Intelligence;
		case 5:
			return SavingThrow.Strength;
		case 6:
			return SavingThrow.Wisdom;
	}
};

export const mapNumberToSavingThrowDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "None";
		case 1:
			return "Charisma";
		case 2:
			return "Constitution";
		case 3:
			return "Dexterity";
		case 4:
			return "Intelligence";
		case 5:
			return "Strength";
		case 6:
			return "Wisdom";
	}

	return "";
};
