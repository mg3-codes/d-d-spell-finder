/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { EdgeOfTheEmpireDiceColor } from "./edge-of-the-empire-dice-color";

export enum EdgeOfTheEmpireDiceSymbol {
	Advantage = 0,
	Blank = 1,
	DarkSide = 2,
	Despair = 3,
	Failure = 4,
	LightSide = 5,
	Success = 6,
	Threat = 7,
	Triumph = 8,
}

/**
 * Map a dice symbol to its corresponding character.
 * @param symbol - The dice symbol to map.
 * @returns The corresponding character.
 */
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

/**
 * Map a dice symbol to its display name.
 * @param symbol - The dice symbol to map.
 * @returns The corresponding display name.
 */
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

/**
 * Map a character to its corresponding display name.
 * @param character - The character to map.
 * @returns The corresponding display name.
 */
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

/**
 * Map a dice symbol to its corresponding color.
 * @param symbol - The dice symbol to map.
 * @returns The corresponding color, or null if invalid.
 */
export const mapSymbolToColor = (
	symbol: EdgeOfTheEmpireDiceSymbol,
): EdgeOfTheEmpireDiceColor | null => {
	switch (symbol) {
		case EdgeOfTheEmpireDiceSymbol.Success:
		case EdgeOfTheEmpireDiceSymbol.Advantage:
			return EdgeOfTheEmpireDiceColor.Green;
		case EdgeOfTheEmpireDiceSymbol.Failure:
		case EdgeOfTheEmpireDiceSymbol.Threat:
			return EdgeOfTheEmpireDiceColor.Purple;
		case EdgeOfTheEmpireDiceSymbol.Triumph:
			return EdgeOfTheEmpireDiceColor.Yellow;
		case EdgeOfTheEmpireDiceSymbol.Despair:
			return EdgeOfTheEmpireDiceColor.Red;
		default:
			return null;
	}
};
