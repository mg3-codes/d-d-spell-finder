/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum Attack {
	None = 0,
	Melee = 1,
	Ranged = 2,
}

export const mapNumberToAttack = (x: number): Attack | undefined => {
	switch (x) {
		case 0:
			return Attack.None;
		case 1:
			return Attack.Melee;
		case 2:
			return Attack.Ranged;
	}
};

export const mapNumberToAttackDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "None";
		case 1:
			return "Melee";
		case 2:
			return "Ranged";
	}

	return "";
};
