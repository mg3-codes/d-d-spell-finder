/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum DiceType {
	Numbered = 0,
	EdgeOfTheEmpire = 1,
}

/**
 * Map a number to a DiceType enum value.
 * @param x - The number to map.
 * @returns The corresponding DiceType enum value, or null if invalid.
 */
export const mapNumberToDiceType = (x: number): DiceType | null => {
	switch (x) {
		case 0:
			return DiceType.Numbered;
		case 1:
			return DiceType.EdgeOfTheEmpire;
		default:
			return null;
	}
};

/**
 * Map a number to a dice type display name.
 * @param x - The number to map.
 * @returns The corresponding dice type display name.
 */
export const mapNumberToDiceTypeDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "Numbered";
		case 1:
			return "Edge of the Empire";
		default:
			return "";
	}
};
