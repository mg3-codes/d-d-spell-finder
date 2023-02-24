/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum Column {
	Name = 0,
	School = 1,
	Level = 2,
	CastingTime = 3,
	Duration = 4,
	Range = 5,
	Area = 6,
	Attack = 7,
	Save = 8,
	Damage = 9,
	Effect = 10,
	Ritual = 11,
	Concentration = 12,
	Verbal = 13,
	Somatic = 14,
	Material = 15,
	Source = 16,
	Details = 17,
}

export const mapColumnToDisplayName = (column: Column): string => {
	switch (column) {
		case 0:
			return "Name";
		case 1:
			return "School";
		case 2:
			return "Level";
		case 3:
			return "Casting Time";
		case 4:
			return "Duration";
		case 5:
			return "Range";
		case 6:
			return "Area";
		case 7:
			return "Attack";
		case 8:
			return "Save";
		case 9:
			return "Damage";
		case 10:
			return "Effect";
		case 11:
			return "Ritual";
		case 12:
			return "Concentration";
		case 13:
			return "Verbal";
		case 14:
			return "Somatic";
		case 15:
			return "Material";
		case 16:
			return "Source";
		case 17:
			return "Details";
		default:
			return "";
	}
};
