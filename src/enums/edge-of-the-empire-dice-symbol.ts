/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum EdgeOfTheEmpireDiceSymbol {
	Advantage,
	Blank,
	DarkSide,
	Despair,
	Failure,
	LightSide,
	Success,
	Threat,
	Triumph,
}

export const mapSymbolToCharacter = (
	symbol: EdgeOfTheEmpireDiceSymbol,
): string => {
	switch (symbol) {
		case EdgeOfTheEmpireDiceSymbol.Advantage:
			return "a";
		case EdgeOfTheEmpireDiceSymbol.Blank:
			return "☐";
		case EdgeOfTheEmpireDiceSymbol.DarkSide:
			return "z";
		case EdgeOfTheEmpireDiceSymbol.Despair:
			return "y";
		case EdgeOfTheEmpireDiceSymbol.Failure:
			return "f";
		case EdgeOfTheEmpireDiceSymbol.LightSide:
			return "Z";
		case EdgeOfTheEmpireDiceSymbol.Success:
			return "s";
		case EdgeOfTheEmpireDiceSymbol.Threat:
			return "t";
		case EdgeOfTheEmpireDiceSymbol.Triumph:
			return "x";
		default:
			return "";
	}
};
