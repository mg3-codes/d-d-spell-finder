/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import NumberDie from "../number-die";
import { EdgeOfTheEmpireDiceColor } from "../../enums/edge-of-the-empire-dice-color";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

export default class ForceDie extends NumberDie {
	color = EdgeOfTheEmpireDiceColor.White;
	shortDisplayName = "Force";
	displayName = "Force Die";

	constructor(value?: number) {
		super(12, value);
	}

	mapNumberToDiceFace = (x: number): ForceDieFace | null => {
		switch (x) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				return ForceDieFace.DarkSide;
			case 7:
				return ForceDieFace.TwoDarkSide;
			case 8:
			case 9:
				return ForceDieFace.LightSide;
			case 10:
			case 11:
			case 12:
				return ForceDieFace.TwoLightSide;
			default:
				return null;
		}
	};

	mapValueToResults = (): EdgeOfTheEmpireDiceSymbol[] => {
		switch (this.value) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				return [EdgeOfTheEmpireDiceSymbol.DarkSide];
			case 7:
				return [
					EdgeOfTheEmpireDiceSymbol.DarkSide,
					EdgeOfTheEmpireDiceSymbol.DarkSide,
				];
			case 8:
			case 9:
				return [EdgeOfTheEmpireDiceSymbol.LightSide];
			case 10:
			case 11:
			case 12:
				return [
					EdgeOfTheEmpireDiceSymbol.LightSide,
					EdgeOfTheEmpireDiceSymbol.LightSide,
				];
			default:
				return [];
		}
	};
}

enum ForceDieFace {
	DarkSide,
	TwoDarkSide,
	LightSide,
	TwoLightSide,
}
