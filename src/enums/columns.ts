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
		case Column.Name:
			return "Name";
		case Column.School:
			return "School";
		case Column.Level:
			return "Level";
		case Column.CastingTime:
			return "Casting Time";
		case Column.Duration:
			return "Duration";
		case Column.Range:
			return "Range";
		case Column.Area:
			return "Area";
		case Column.Attack:
			return "Attack";
		case Column.Save:
			return "Save";
		case Column.Damage:
			return "Damage";
		case Column.Effect:
			return "Effect";
		case Column.Ritual:
			return "Ritual";
		case Column.Concentration:
			return "Concentration";
		case Column.Verbal:
			return "Verbal";
		case Column.Somatic:
			return "Somatic";
		case Column.Material:
			return "Material";
		case Column.Source:
			return "Source";
		case Column.Details:
			return "Details";
		default:
			return "";
	}
};
