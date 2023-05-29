/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import NumberDie from "../number-die";
import { EdgeOfTheEmpireDiceColor } from "../../enums/edge-of-the-empire-dice-color";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

export default class SetbackDie extends NumberDie {
	color = EdgeOfTheEmpireDiceColor.Black;
	shortDisplayName = "Setback";
	displayName = "Setback Die";

	constructor(value?: number) {
		super(6, value);
	}

	mapNumberToDiceFace = (x: number): SetbackDieFace | null => {
		switch (x) {
			case 1:
			case 2:
				return SetbackDieFace.Blank;
			case 3:
			case 4:
				return SetbackDieFace.Failure;
			case 5:
			case 6:
				return SetbackDieFace.Threat;
			default:
				return null;
		}
	};

	mapValueToResults = (): EdgeOfTheEmpireDiceSymbol[] => {
		switch (this.value) {
			case 1:
			case 2:
				return [EdgeOfTheEmpireDiceSymbol.Blank];
			case 3:
			case 4:
				return [EdgeOfTheEmpireDiceSymbol.Failure];
			case 5:
			case 6:
				return [EdgeOfTheEmpireDiceSymbol.Threat];
			default:
				return [];
		}
	};
}

enum SetbackDieFace {
	Blank,
	Failure,
	Threat,
}
