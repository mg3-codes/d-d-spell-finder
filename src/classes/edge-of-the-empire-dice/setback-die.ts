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

	/**
	 * Maps the current value of the setback die to an array of `EdgeOfTheEmpireDiceSymbol` results.
	 *
	 * The mapping is as follows:
	 * - Values 1 and 2 map to `EdgeOfTheEmpireDiceSymbol.Blank`.
	 * - Values 3 and 4 map to `EdgeOfTheEmpireDiceSymbol.Failure`.
	 * - Values 5 and 6 map to `EdgeOfTheEmpireDiceSymbol.Threat`.
	 * - Any other value maps to an empty array.
	 *
	 * @returns {EdgeOfTheEmpireDiceSymbol[]} An array of `EdgeOfTheEmpireDiceSymbol` results based on the die value.
	 */
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
