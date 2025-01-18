/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import NumberDie from "../number-die";
import { EdgeOfTheEmpireDiceColor } from "../../enums/edge-of-the-empire-dice-color";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

export default class DifficultyDie extends NumberDie {
	color = EdgeOfTheEmpireDiceColor.Purple;
	shortDisplayName = "Difficulty";
	displayName = "Difficulty Die";

	constructor(value?: number) {
		super(8, value);
	}

	/**
	 * Maps the numeric value of the difficulty die to an array of `EdgeOfTheEmpireDiceSymbol` results.
	 *
	 * @returns {EdgeOfTheEmpireDiceSymbol[]} An array of `EdgeOfTheEmpireDiceSymbol` corresponding to the die value.
	 */
	mapValueToResults = (): EdgeOfTheEmpireDiceSymbol[] => {
		switch (this.value) {
			case 1:
				return [EdgeOfTheEmpireDiceSymbol.Blank];
			case 2:
				return [EdgeOfTheEmpireDiceSymbol.Failure];
			case 3:
				return [
					EdgeOfTheEmpireDiceSymbol.Failure,
					EdgeOfTheEmpireDiceSymbol.Failure,
				];
			case 4:
			case 5:
			case 6:
				return [EdgeOfTheEmpireDiceSymbol.Threat];
			case 7:
				return [
					EdgeOfTheEmpireDiceSymbol.Threat,
					EdgeOfTheEmpireDiceSymbol.Threat,
				];
			case 8:
				return [
					EdgeOfTheEmpireDiceSymbol.Failure,
					EdgeOfTheEmpireDiceSymbol.Threat,
				];
			default:
				return [];
		}
	};
}
