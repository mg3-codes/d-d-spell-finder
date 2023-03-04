/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum Range {
	Self = 0,
	SelfByFive = 1,
	SelfByFifteen = 2,
	SelfByThirty = 3,
	SelfBySixty = 4,
	Touch = 5,
	TouchBySixty = 6,
	Five = 7,
	Ten = 8,
	Twenty = 9,
	Thirty = 10,
	Sixty = 11,
	Ninety = 12,
	OneHundred = 13,
	OneHundredTwenty = 14,
	OneHundredTwentyByTwenty = 15,
	OneHundredFifty = 16,
	OneHundredFiftyBySixty = 17,
	Sight = 18,
	ThreeHundred = 19,
	FiveHundred = 20,
	OneThousand = 21,
	OneMile = 22,
	FiveHundredMiles = 23,
	Unlimited = 24,
}

export const mapNumberToRange = (x: number): number | null => {
	switch (x) {
		case 0:
			return Range.Self;
		case 1:
			return Range.SelfByFive;
		case 2:
			return Range.SelfByFifteen;
		case 3:
			return Range.SelfByThirty;
		case 4:
			return Range.SelfBySixty;
		case 5:
			return Range.Touch;
		case 6:
			return Range.TouchBySixty;
		case 7:
			return Range.Five;
		case 8:
			return Range.Ten;
		case 9:
			return Range.Twenty;
		case 10:
			return Range.Thirty;
		case 11:
			return Range.Sixty;
		case 12:
			return Range.Ninety;
		case 13:
			return Range.OneHundred;
		case 14:
			return Range.OneHundredTwenty;
		case 15:
			return Range.OneHundredTwentyByTwenty;
		case 16:
			return Range.OneHundredFifty;
		case 17:
			return Range.OneHundredFiftyBySixty;
		case 18:
			return Range.Sight;
		case 19:
			return Range.ThreeHundred;
		case 20:
			return Range.FiveHundred;
		case 21:
			return Range.OneThousand;
		case 22:
			return Range.OneMile;
		case 23:
			return Range.FiveHundredMiles;
		case 24:
			return Range.Unlimited;
		default:
			return null;
	}
};

export const mapNumberToRangeDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "Self";
		case 1:
			return "Self and 5ft radius";
		case 2:
			return "Self and 15ft radius";
		case 3:
			return "Self and 30ft radius";
		case 4:
			return "Self and 60ft radius";
		case 5:
			return "Touch";
		case 6:
			return "Touch and 60ft radius";
		case 7:
			return "5ft";
		case 8:
			return "10ft";
		case 9:
			return "20ft";
		case 10:
			return "30ft";
		case 11:
			return "60ft";
		case 12:
			return "90ft";
		case 13:
			return "100ft";
		case 14:
			return "120ft";
		case 15:
			return "120ft and 20ft radius";
		case 16:
			return "150ft";
		case 17:
			return "150ft and 60ft radius";
		case 18:
			return "Sight";
		case 19:
			return "300ft";
		case 20:
			return "500ft";
		case 21:
			return "1,000ft";
		case 22:
			return "1 mile";
		case 23:
			return "500 miles";
		case 24:
			return "Unlimited";
		default:
			return "";
	}
};
