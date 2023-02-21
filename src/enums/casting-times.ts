/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

enum CastingTime {
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

const mapNumberToCastingTime = (x: number): number | undefined => {
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
	}
};

const mapNumberToCastingTimeName = (x: number): string => {
	switch (x) {
		case 0:
			return "Action";
		case 1:
			return "Reaction";
		case 2:
			return "BonusAction";
		case 3:
			return "OneMinute";
		case 4:
			return "TenMinutes";
		case 5:
			return "OneHour";
		case 6:
			return "EightHours";
		case 7:
			return "TwelveHours";
		case 8:
			return "TwentyFourHours";
		case 9:
			return "Special";
	}

	return "";
};

export { CastingTime, mapNumberToCastingTime, mapNumberToCastingTimeName };
