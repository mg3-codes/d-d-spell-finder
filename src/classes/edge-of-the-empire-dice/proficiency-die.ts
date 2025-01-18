/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import NumberDie from "../number-die";
import { EdgeOfTheEmpireDiceColor } from "../../enums/edge-of-the-empire-dice-color";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

export default class ProficiencyDie extends NumberDie {
	color = EdgeOfTheEmpireDiceColor.Yellow;
	shortDisplayName = "Proficiency";
	displayName = "Proficiency Die";

	constructor(value?: number) {
		super(12, value);
	}

	/**
	 * Maps the value of the proficiency die to the corresponding array of `EdgeOfTheEmpireDiceSymbol` results.
	 *
	 * @returns {EdgeOfTheEmpireDiceSymbol[]} An array of `EdgeOfTheEmpireDiceSymbol` representing the result of the die roll.
	 *
	 * The mapping is as follows:
	 * - 1: Blank
	 * - 2, 3: Success
	 * - 4, 5: Success, Success
	 * - 6: Advantage
	 * - 7, 8, 9: Success, Advantage
	 * - 10, 11: Advantage, Advantage
	 * - 12: Triumph
	 * - Default: Empty array
	 */
	mapValueToResults = (): EdgeOfTheEmpireDiceSymbol[] => {
		switch (this.value) {
			case 1:
				return [EdgeOfTheEmpireDiceSymbol.Blank];
			case 2:
			case 3:
				return [EdgeOfTheEmpireDiceSymbol.Success];
			case 4:
			case 5:
				return [
					EdgeOfTheEmpireDiceSymbol.Success,
					EdgeOfTheEmpireDiceSymbol.Success,
				];
			case 6:
				return [EdgeOfTheEmpireDiceSymbol.Advantage];
			case 7:
			case 8:
			case 9:
				return [
					EdgeOfTheEmpireDiceSymbol.Success,
					EdgeOfTheEmpireDiceSymbol.Advantage,
				];
			case 10:
			case 11:
				return [
					EdgeOfTheEmpireDiceSymbol.Advantage,
					EdgeOfTheEmpireDiceSymbol.Advantage,
				];
			case 12:
				return [EdgeOfTheEmpireDiceSymbol.Triumph];
			default:
				return [];
		}
	};
}
