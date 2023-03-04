/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum CastingTime {
	Action = 0,
	Reaction = 1,
	BonusAction = 2,
	OneMinute = 3,
	TenMinutes = 4,
	OneHour = 5,
	EightHours = 6,
	TwelveHours = 7,
	TwentyFourHours = 8,
	Special = 9,
}

export const mapNumberToCastingTime = (x: number): number | null => {
	switch (x) {
		case 0:
			return CastingTime.Action;
		case 1:
			return CastingTime.Reaction;
		case 2:
			return CastingTime.BonusAction;
		case 3:
			return CastingTime.OneMinute;
		case 4:
			return CastingTime.TenMinutes;
		case 5:
			return CastingTime.OneHour;
		case 6:
			return CastingTime.EightHours;
		case 7:
			return CastingTime.TwelveHours;
		case 8:
			return CastingTime.TwentyFourHours;
		case 9:
			return CastingTime.Special;
		default:
			return null;
	}
};

export const mapNumberToCastingTimeDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "Action";
		case 1:
			return "Reaction";
		case 2:
			return "Bonus Action";
		case 3:
			return "1 Minute";
		case 4:
			return "10 Minutes";
		case 5:
			return "1 Hour";
		case 6:
			return "8 Hours";
		case 7:
			return "12 Hours";
		case 8:
			return "24 Hours";
		case 9:
			return "Special";
		default:
			return "";
	}
};
