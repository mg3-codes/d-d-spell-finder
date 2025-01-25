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

/**
 * Map a number to an Attack enum value.
 * @param x - The number to map.
 * @returns The corresponding Attack enum value, or null if invalid.
 */
export const mapNumberToAttack = (x: number): Attack | null => {
	switch (x) {
		case 0:
			return Attack.None;
		case 1:
			return Attack.Melee;
		case 2:
			return Attack.Ranged;
		default:
			return null;
	}
};

/**
 * Map a number to an attack display name.
 * @param x - The number to map.
 * @returns The corresponding attack display name.
 */
export const mapNumberToAttackDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "None";
		case 1:
			return "Melee";
		case 2:
			return "Ranged";
		default:
			return "";
	}
};
