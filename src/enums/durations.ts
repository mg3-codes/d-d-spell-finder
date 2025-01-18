/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum Duration {
	Instantaneous = 0,
	OneRound = 1,
	OneMinute = 2,
	SixRounds = 3,
	TenMinutes = 4,
	OneHour = 5,
	TwoHours = 6,
	EightHours = 7,
	OneDay = 8,
	SevenDays = 9,
	TenDays = 10,
	ThirtyDays = 11,
	Special = 12,
	UntilDispelled = 13,
	UntilDispelledOrTriggered = 14,
}

/**
 * Map a number to a Duration enum value.
 * @param x - The number to map.
 * @returns The corresponding Duration enum value, or null if invalid.
 */
export const mapNumberToDuration = (x: number): number | null => {
	switch (x) {
		case 0:
			return Duration.Instantaneous;
		case 1:
			return Duration.OneRound;
		case 2:
			return Duration.OneMinute;
		case 3:
			return Duration.SixRounds;
		case 4:
			return Duration.TenMinutes;
		case 5:
			return Duration.OneHour;
		case 6:
			return Duration.TwoHours;
		case 7:
			return Duration.EightHours;
		case 8:
			return Duration.OneDay;
		case 9:
			return Duration.SevenDays;
		case 10:
			return Duration.TenDays;
		case 11:
			return Duration.ThirtyDays;
		case 12:
			return Duration.Special;
		case 13:
			return Duration.UntilDispelled;
		case 14:
			return Duration.UntilDispelledOrTriggered;
		default:
			return null;
	}
};

/**
 * Map a number to a duration display name.
 * @param x - The number to map.
 * @returns The corresponding duration display name.
 */
export const mapNumberToDurationDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "Instantaneous";
		case 1:
			return "1 Round";
		case 2:
			return "1 Minute";
		case 3:
			return "6 Rounds";
		case 4:
			return "10 Minutes";
		case 5:
			return "1 Hour";
		case 6:
			return "2 Hours";
		case 7:
			return "8 Hours";
		case 8:
			return "1 Day";
		case 9:
			return "7 Days";
		case 10:
			return "10 Days";
		case 11:
			return "30 Days";
		case 12:
			return "Special";
		case 13:
			return "Until Dispelled";
		case 14:
			return "Until Dispelled Or Triggered";
		default:
			return "";
	}
};
