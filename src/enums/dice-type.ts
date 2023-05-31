/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum DiceType {
	Numbered = 0,
	EdgeOfTheEmpire = 1,
}

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
