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

export const mapSymbolToDisplayName = (
	symbol: EdgeOfTheEmpireDiceSymbol,
): string => {
	switch (symbol) {
		case EdgeOfTheEmpireDiceSymbol.Advantage:
			return "Advantage";
		case EdgeOfTheEmpireDiceSymbol.Blank:
			return "Blank";
		case EdgeOfTheEmpireDiceSymbol.DarkSide:
			return "Dark Side";
		case EdgeOfTheEmpireDiceSymbol.Despair:
			return "Despair";
		case EdgeOfTheEmpireDiceSymbol.Failure:
			return "Failure";
		case EdgeOfTheEmpireDiceSymbol.LightSide:
			return "Light Side";
		case EdgeOfTheEmpireDiceSymbol.Success:
			return "Success";
		case EdgeOfTheEmpireDiceSymbol.Threat:
			return "Threat";
		case EdgeOfTheEmpireDiceSymbol.Triumph:
			return "Triumph";
		default:
			return "";
	}
};

export const mapCharacterToDisplayName = (character: string): string => {
	switch (character) {
		case "a":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.Advantage);
		case "☐":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.Blank);
		case "z":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.DarkSide);
		case "y":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.Despair);
		case "f":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.Failure);
		case "Z":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.LightSide);
		case "s":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.Success);
		case "t":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.Threat);
		case "x":
			return mapSymbolToDisplayName(EdgeOfTheEmpireDiceSymbol.Triumph);
		default:
			return "";
	}
};
