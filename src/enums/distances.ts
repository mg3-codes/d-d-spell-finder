/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

enum Distance {
	Unknown = -1,
	One = 1,
	Five = 5,
	Ten = 10,
	Fifteen = 15,
	Twenty = 20,
	Thirty = 30,
	Forty = 40,
	Fifty = 50,
	Sixty = 60,
	OneHundred = 100,
	TwoHundred = 200,
	TwoThousandFiveHundred = 2500,
	OneMile = 5280,
	FiveMiles = 26400,
	FortyThousand = 40000,
}

const mapNumberToDistance = (x: number): number => {
	switch (x) {
		case 1:
			return Distance.One;
		case 5:
			return Distance.Five;
		case 10:
			return Distance.Ten;
		case 15:
			return Distance.Fifteen;
		case 20:
			return Distance.Twenty;
		case 30:
			return Distance.Thirty;
		case 40:
			return Distance.Forty;
		case 50:
			return Distance.Fifty;
		case 60:
			return Distance.Sixty;
		case 100:
			return Distance.OneHundred;
		case 200:
			return Distance.TwoHundred;
		case 2500:
			return Distance.TwoThousandFiveHundred;
		case 5280:
			return Distance.OneMile;
		case 26400:
			return Distance.FiveMiles;
		case 40000:
			return Distance.FortyThousand;
		case -1:
		default:
			return Distance.Unknown;
	}
};

const mapNumberToDistanceDisplayName = (x: number): string => {
	switch (x) {
		case 1:
			return "1ft";
		case 5:
			return "5ft";
		case 10:
			return "10ft";
		case 15:
			return "15ft";
		case 20:
			return "20ft";
		case 30:
			return "30ft";
		case 40:
			return "40ft";
		case 50:
			return "50ft";
		case 60:
			return "60ft";
		case 100:
			return "100ft";
		case 200:
			return "200ft";
		case 2500:
			return "2,500ft";
		case 5280:
			return "1 mile";
		case 26400:
			return "5 miles";
		case 40000:
			return "40,000ft";
		case -1:
		default:
			return "Unknown";
	}
};

export { Distance, mapNumberToDistance, mapNumberToDistanceDisplayName };
