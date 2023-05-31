/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import NumberDie from "../number-die";
import { EdgeOfTheEmpireDiceColor } from "../../enums/edge-of-the-empire-dice-color";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

export default class ChallengeDie extends NumberDie {
	color = EdgeOfTheEmpireDiceColor.Red;
	shortDisplayName = "Challenge";
	displayName = "Challenge Die";

	constructor(value?: number) {
		super(12, value);
	}

	mapValueToResults = (): EdgeOfTheEmpireDiceSymbol[] => {
		switch (this.value) {
			case 1:
				return [EdgeOfTheEmpireDiceSymbol.Blank];
			case 2:
			case 3:
				return [EdgeOfTheEmpireDiceSymbol.Failure];
			case 4:
			case 5:
				return [
					EdgeOfTheEmpireDiceSymbol.Failure,
					EdgeOfTheEmpireDiceSymbol.Failure,
				];
			case 6:
			case 7:
				return [EdgeOfTheEmpireDiceSymbol.Threat];
			case 8:
			case 9:
				return [
					EdgeOfTheEmpireDiceSymbol.Failure,
					EdgeOfTheEmpireDiceSymbol.Threat,
				];
			case 10:
			case 11:
				return [
					EdgeOfTheEmpireDiceSymbol.Threat,
					EdgeOfTheEmpireDiceSymbol.Threat,
				];
			case 12:
				return [EdgeOfTheEmpireDiceSymbol.Despair];
			default:
				return [];
		}
	};
}
