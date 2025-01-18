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

	/**
	 * Maps the value of the force die to the corresponding results.
	 *
	 * The mapping is as follows:
	 * - Values 1 to 6: Returns an array with a single `EdgeOfTheEmpireDiceSymbol.DarkSide`.
	 * - Value 7: Returns an array with two `EdgeOfTheEmpireDiceSymbol.DarkSide`.
	 * - Values 8 and 9: Returns an array with a single `EdgeOfTheEmpireDiceSymbol.LightSide`.
	 * - Values 10 to 12: Returns an array with two `EdgeOfTheEmpireDiceSymbol.LightSide`.
	 * - Any other value: Returns an empty array.
	 *
	 * @returns {EdgeOfTheEmpireDiceSymbol[]} An array of `EdgeOfTheEmpireDiceSymbol` based on the die value.
	 */
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
